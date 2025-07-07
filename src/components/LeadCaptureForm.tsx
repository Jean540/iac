
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { toast } from '@/hooks/use-toast';

interface LeadCaptureFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
}

export const LeadCaptureForm = ({ isOpen, onClose }: LeadCaptureFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormData>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Simular envio dos dados (aqui você pode integrar com sua API)
      console.log('Dados do lead:', data);
      
      // Mostrar toast de sucesso
      toast({
        title: "Dados enviados com sucesso!",
        description: "Redirecionando para finalizar sua inscrição...",
      });

      // Aguardar um momento antes do redirecionamento
      setTimeout(() => {
        // Substitua pela sua URL da Hotmart
        window.open('https://pay.hotmart.com/YOUR_PRODUCT_LINK', '_blank');
        onClose();
        setIsSubmitting(false);
      }, 1500);

    } catch (error) {
      toast({
        title: "Erro ao enviar dados",
        description: "Tente novamente em alguns instantes.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-primary border-secondary/30">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-secondary">
            🚀 Quase lá!
          </DialogTitle>
          <p className="text-center text-gray-300 mt-2">
            Preencha seus dados para garantir sua vaga no IAC 2025
          </p>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              rules={{ required: "Nome é obrigatório" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-300">Nome completo</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Digite seu nome completo"
                      className="bg-primary/50 border-secondary/30 text-white placeholder:text-gray-400"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              rules={{ 
                required: "Email é obrigatório",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Email inválido"
                }
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-300">Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="seu@email.com"
                      className="bg-primary/50 border-secondary/30 text-white placeholder:text-gray-400"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              rules={{ 
                required: "Telefone é obrigatório",
                pattern: {
                  value: /^[\d\s\(\)\-\+]+$/,
                  message: "Telefone inválido"
                }
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-300">Telefone/WhatsApp</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="(11) 99999-9999"
                      className="bg-primary/50 border-secondary/30 text-white placeholder:text-gray-400"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-secondary text-primary hover:opacity-90 transition-all duration-300 text-lg py-6 pulse-cta font-bold"
              >
                {isSubmitting ? '🔄 Enviando...' : '🚀 GARANTIR MINHA VAGA AGORA'}
              </Button>

              <div className="text-center text-sm text-gray-400">
                <span className="flex items-center justify-center gap-2">
                  🔒 Seus dados estão seguros conosco
                </span>
              </div>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
