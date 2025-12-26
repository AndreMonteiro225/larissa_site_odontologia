import { Smile, Activity, Award, CalendarCheck } from 'lucide-react';

export const HERO_SLIDES = [
  {
    id: 1,
    title: "Seu sorriso é a nossa prioridade",
    subtitle: "Tecnologia avançada e atendimento humanizado para transformar sua autoestima.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1920",
    ctaPrimary: "Agendar Consulta",
    ctaSecondary: "Conhecer Tratamentos"
  },
  {
    id: 2,
    title: "Especialistas em Implantes",
    subtitle: "Recupere a função e a estética do seu sorriso com segurança e precisão.",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=1920",
    ctaPrimary: "Fale Conosco",
    ctaSecondary: "Ver Galeria"
  },
  {
    id: 3,
    title: "Odontologia Estética",
    subtitle: "Lentes de contato e clareamento para o sorriso que você sempre sonhou.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf4722e12?auto=format&fit=crop&q=80&w=1920",
    ctaPrimary: "Agendar Avaliação",
    ctaSecondary: "Saiba Mais"
  }
];

export const SERVICES = [
  {
    id: 1,
    title: "Clareamento Dental",
    description: "Técnicas modernas a laser ou caseiras para devolver o brilho natural dos seus dentes.",
    icon: Smile // Armazenamos a referência do componente, não o JSX <Smile />
  },
  {
    id: 2,
    title: "Ortodontia Invisível",
    description: "Alinhadores transparentes que corrigem seu sorriso de forma discreta e rápida.",
    icon: Activity
  },
  {
    id: 3,
    title: "Implantes Dentários",
    description: "Reabilitação oral completa com materiais de titânio e porcelana de última geração.",
    icon: Award
  },
  {
    id: 4,
    title: "Harmonização Orofacial",
    description: "Procedimentos estéticos funcionais para equilibrar os traços do rosto e o sorriso.",
    icon: CalendarCheck
  }
];

export const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1606811880566-7e0409a365df?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1588776813186-6002963b07f5?auto=format&fit=crop&q=80&w=600"
];