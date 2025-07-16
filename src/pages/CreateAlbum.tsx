import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload, X } from 'lucide-react';
import DashboardHeader from '@/components/DashboardHeader';
import DashboardNavbar from '@/components/DashboardNavbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CreateAlbum = () => {
  const navigate = useNavigate();
  const [albumData, setAlbumData] = useState({
    title: '',
    description: '',
    tags: '',
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically save the album data
    console.log('Album Data:', albumData);
    console.log('Cover Image:', coverImage);
    
    // Navigate back to dashboard
    navigate('/dashboard');
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
                  />
                  <p className="text-xs text-muted-foreground">
                    Separate tags with commas
                  </p>
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
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 bg-primary hover:bg-hover-forest-green"
                    disabled={!albumData.title.trim()}
                  >
                    Create Album
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CreateAlbum;