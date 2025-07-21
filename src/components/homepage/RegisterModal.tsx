import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, Camera } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { register } from '@/services/auth/authService';
import type { RegisterPayload } from '@/services/auth/types';
import { toast } from '@/components/ui/sonner';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
}

const RegisterModal = ({ isOpen, onClose, onSwitchToLogin }: RegisterModalProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match.');
      return;
    }
    setLoading(true);
    const payload: RegisterPayload = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      mobile: formData.mobile,
      password: formData.password,
    };
    try {
      const response = await register(payload);
      toast.success('Registration successful! Redirecting to dashboard...');
      localStorage.setItem('token', response.data.token);
      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 1200);
    } catch (err: any) {
      let errorMsg = err.message || 'Registration failed. Please try again.';
      if (Array.isArray(err.errors)) {
        errorMsg = err.errors.map((e: any) => e.msg).join('\n');
      }
      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const floatingLabelClass = (value: string) =>
    `${value ? 'text-xs top-0 text-primary' : 'peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-primary'}`;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-center space-y-4">
          <div className="mx-auto w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
            <Camera className="w-6 h-6 text-white" />
          </div>
          <DialogTitle className="text-2xl font-bold font-poppins">Join PhotoVault</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="relative">
              <Input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder=" "
                required
                className="h-11 focus:ring-2 focus:ring-primary/20 peer"
              />
              <Label htmlFor="firstName" className="floating-label">First name</Label>
            </div>
            <div className="relative">
              <Input
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder=" "
                required
                className="h-11 focus:ring-2 focus:ring-primary/20 peer"
              />
              <Label htmlFor="lastName" className="floating-label">Last name</Label>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="relative">
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder=" "
                required
                className="h-11 focus:ring-2 focus:ring-primary/20 peer"
              />
              <Label htmlFor="email" className="floating-label">Email address</Label>
            </div>
            <div className="relative">
              <Input
                id="mobile"
                name="mobile"
                type="tel"
                value={formData.mobile}
                onChange={handleInputChange}
                placeholder=" "
                required
                className="h-11 focus:ring-2 focus:ring-primary/20 peer"
              />
              <Label htmlFor="mobile" className="floating-label">Mobile number</Label>
            </div>
          </div>
          <div className="space-y-2">
            <div className="relative">
              <Input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={handleInputChange}
                placeholder=" "
                required
                className="h-11 pr-10 focus:ring-2 focus:ring-primary/20 peer"
              />
              <Label htmlFor="password" className="floating-label">Password</Label>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>
          <div className="space-y-2">
            <div className="relative">
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder=" "
                required
                className="h-11 pr-10 focus:ring-2 focus:ring-primary/20 peer"
              />
              <Label htmlFor="confirmPassword" className="floating-label">Confirm password</Label>
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>
          <Button type="submit" className="w-full h-11 bg-primary hover:bg-hover-forest-green font-medium shadow-soft" disabled={loading}>
            {loading ? 'Creating account...' : 'Create account'}
          </Button>
          <div className="text-xs text-muted-foreground text-center mt-2">
            By continuing, you agree to PhotoVault's{' '}
            <a href="#" className="text-primary hover:text-hover-forest-green">Terms of Service</a> and{' '}
            <a href="#" className="text-primary hover:text-hover-forest-green">Privacy Policy</a>.
          </div>
        </form>

        {/* Divider */}
        <div className="my-4 flex items-center justify-center text-sm text-muted-foreground">
          <div className="border-t w-full mr-2 border-border"></div>
          or
          <div className="border-t w-full ml-2 border-border"></div>
        </div>

        {/* Social Logins */}
        <div className="flex flex-row gap-2">
          <Button
            variant="outline"
            className="w-full h-11 flex items-center justify-center gap-2 border-border shadow-soft"
            onClick={() => console.log("Google login")}
          >
            <FcGoogle className="w-5 h-5" />
            Continue with Google
          </Button>
          <Button
            variant="outline"
            className="w-full h-11 flex items-center justify-center gap-2 border-border shadow-soft"
            onClick={() => console.log("Facebook login")}
          >
            <FaFacebook className="w-5 h-5 text-[#1877F2]" />
            Continue with Facebook
          </Button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-muted-foreground">
            Already have an account?{' '}
            <button
              onClick={onSwitchToLogin}
              className="text-primary hover:text-hover-forest-green font-medium"
            >
              Log in
            </button>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterModal;
