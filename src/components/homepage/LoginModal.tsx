import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, Camera } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { loginUser } from '@/services/auth/authService';
import type { LoginPayload } from '@/services/auth/types';
import { toast } from '@/components/ui/sonner';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToRegister: () => void;
}

const LoginModal = ({ isOpen, onClose, onSwitchToRegister }: LoginModalProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const payload: LoginPayload = {
      identifier: email,
      password,
    };
    try {
      const response = await loginUser(payload);
      toast.success('Login successful! Redirecting to dashboard...');
      localStorage.setItem('token', response.data.token);
      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 1200);
    } catch (err: any) {
      let errorMsg = err.message || 'Login failed. Please try again.';
      if (Array.isArray(err.errors)) {
        errorMsg = err.errors.map((e: any) => e.msg).join('\n');
      }
      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader className="text-center space-y-4">
          <div className="mx-auto w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
            <Camera className="w-6 h-6 text-white" />
          </div>
          <DialogTitle className="text-2xl font-bold font-poppins">Welcome back</DialogTitle>
          <p className="text-muted-foreground">Sign in to your PhotoVault account</p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=" "
              required
              className="h-11 focus:ring-2 focus:ring-primary/20 peer"
            />
            <Label htmlFor="email" className="floating-label">Email address</Label>
          </div>

          <div className="relative">
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" className="rounded border-border" />
              <span className="text-muted-foreground">Remember me</span>
            </label>
            <a href="#" className="text-primary hover:text-hover-forest-green font-medium">
              Forgot password?
            </a>
          </div>

          <Button 
            type="submit" 
            className="w-full h-11 bg-primary hover:bg-hover-forest-green font-medium shadow-soft"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Log in'}
          </Button>
        </form>

        {/* Social Logins */}
        <div className="my-4 flex flex-row gap-2">
          <Button
            variant="outline"
            className="w-full h-11 flex items-center justify-center gap-2 border-border shadow-soft"
            onClick={() => console.log("Google login")}
          >
            <FcGoogle className="w-5 h-5" />
            Login with Google
          </Button>
          <Button
            variant="outline"
            className="w-full h-11 flex items-center justify-center gap-2 border-border shadow-soft"
            onClick={() => console.log("Facebook login")}
          >
            <FaFacebook className="w-5 h-5 text-[#1877F2]" />
            Login with Facebook
          </Button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-muted-foreground">
            Don't have an account?{' '}
            <button
              onClick={onSwitchToRegister}
              className="text-primary hover:text-hover-forest-green font-medium"
            >
              Sign up for free
            </button>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;