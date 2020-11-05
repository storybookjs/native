type Platform = 'android' | 'ios';

interface RendererProps {
  apiKey: string;
  platform: Platform;
  storyParams: Record<string, any>;
  deepLinkBaseUrl?: string;
  knobs?: Record<string, any>;
}
