import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload, X } from 'lucide-react';
import DashboardHeader from '@/components/common/DashboardHeader';
import DashboardNavbar from '@/components/common/DashboardNavbar';
import DashboardFooter from '@/components/common/DashboardFooter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { createAlbum } from '@/services/album/albumService';
import { toast } from "@/components/ui/sonner";

const CreateAlbum = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [albumData, setAlbumData] = useState({
    title: '',
    description: '',
    tags: '',
    type: 'personal',
    location: '',
    privacy_settings: {
      allow_comments: true,
      allow_downloads: false,
      password_protected: false,
    },
  });

  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [coverPreview, setCoverPreview] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setAlbumData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCoverImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCoverImage(file);
      const reader = new FileReader();
      reader.onload = () => {
        setCoverPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeCoverImage = () => {
    setCoverImage(null);
    setCoverPreview(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    if (!albumData.title.trim()) {
      return toast.error("Album title is required");
    }

    if (!albumData.tags.trim()) {
      return toast.error("Please add at least one tag");
    }

    if (!albumData.location.trim()) {
      return toast.error("Location is required");
    }

    if (!coverPreview) {
      return toast.error("Cover image is required");
    }

    const tagsArray = albumData.tags
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag !== '');

    try {

      setIsSubmitting(true);

      const formData = new FormData();

      formData.append('title', albumData.title);
      formData.append('description', albumData.description);
      formData.append('location', albumData.location);
      formData.append('type', albumData.type);
      formData.append('tags', tagsArray.join(','));
      formData.append('privacy_settings', JSON.stringify(albumData.privacy_settings));
      if (coverImage) {
        formData.append('cover_photo', coverImage);
      }

      const createdAlbum = await createAlbum(formData);
      
      toast.success('Album created successfully!');

      setAlbumData({
        title: '',
        description: '',
        tags: '',
        type: 'personal',
        location: '',
        privacy_settings: {
          allow_comments: true,
          allow_downloads: false,
          password_protected: false,
        },
      });

      setCoverImage(null);
      setCoverPreview(null);

      setTimeout(() => navigate("/dashboard"), 1000);

    } catch (err) {
      const errorMessage = err?.message || 'Failed to create album';
      toast.error(errorMessage);
      console.error('Create Album Error:', err);

    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <DashboardNavbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => navigate('/dashboard')}
            className="mb-6 p-0 h-auto font-normal text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Albums
          </Button>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-2xl font-bold font-poppins">
                Create New Album
              </CardTitle>
              <p className="text-muted-foreground">
                Add details for your new photo album
              </p>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Album Title */}
                <div className="space-y-2">
                  <Label htmlFor="title" className="text-sm font-medium">
                    Album Title *
                  </Label>
                  <Input
                    id="title"
                    name="title"
                    value={albumData.title}
                    onChange={handleInputChange}
                    placeholder="Enter album title"
                    required
                    className="border-border"
                    disabled={isSubmitting}
                  />
                </div>

                {/* Album Description */}
                <div className="space-y-2">
                  <Label htmlFor="description" className="text-sm font-medium">
                    Description
                  </Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={albumData.description}
                    onChange={handleInputChange}
                    placeholder="Describe your album..."
                    rows={3}
                    className="border-border resize-none"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    name="location"
                    value={albumData.location}
                    onChange={handleInputChange}
                    placeholder="e.g., Goa, India"
                    disabled={isSubmitting}
                  />
                </div>

                {/* Tags */}
                <div className="space-y-2">
                  <Label htmlFor="tags" className="text-sm font-medium">
                    Tags
                  </Label>
                  <Input
                    id="tags"
                    name="tags"
                    value={albumData.tags}
                    onChange={handleInputChange}
                    placeholder="vacation, family, friends (comma separated)"
                    className="border-border"
                    disabled={isSubmitting}
                  />
                  <p className="text-xs text-muted-foreground">
                    Separate tags with commas
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <Label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      disabled={isSubmitting}
                      checked={albumData.privacy_settings.allow_comments}
                      onChange={(e) =>
                        setAlbumData(prev => ({
                          ...prev,
                          privacy_settings: {
                            ...prev.privacy_settings,
                            allow_comments: e.target.checked,
                          },
                        }))
                      }
                    />
                    <span>Allow Comments</span>
                  </Label>
                </div>

                {/* Cover Image */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium">
                    Cover Image
                  </Label>
                  
                  {!coverPreview ? (
                    <div className="border-2 border-dashed border-border rounded-lg p-6">
                      <div className="text-center">
                        <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                        <p className="text-sm text-muted-foreground mb-2">
                          Choose a cover image for your album
                        </p>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleCoverImageChange}
                          className="hidden"
                          id="cover-upload"
                          disabled={isSubmitting}
                        />
                        <Label
                          htmlFor="cover-upload"
                          className="cursor-pointer inline-flex items-center px-4 py-2 border border-border rounded-md text-sm font-medium hover:bg-secondary transition-colors"
                        >
                          Select Image
                        </Label>
                      </div>
                    </div>
                  ) : (
                    <div className="relative inline-block">
                      <img
                        src={coverPreview}
                        alt="Cover preview"
                        className="w-32 h-32 object-cover rounded-lg border border-border"
                      />
                      <Button
                        type="button"
                        variant="secondary"
                        size="sm"
                        onClick={removeCoverImage}
                        className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0"
                      >
                        <X className="w-3 h-3" />
                      </Button>
                    </div>
                  )}
                </div>

                {/* Form Actions */}
                <div className="flex gap-4 pt-6">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => navigate('/dashboard')}
                    className="flex-1"
                    disabled={isSubmitting}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 bg-primary hover:bg-hover-forest-green"
                    disabled={!albumData.title.trim() || isSubmitting}
                  >
                    {isSubmitting ? 'Creating...' : 'Create Album'}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      <DashboardFooter />
    </div>
  );
};

export default CreateAlbum;