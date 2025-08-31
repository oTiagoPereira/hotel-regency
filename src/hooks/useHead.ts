import { useEffect } from 'react';

interface MetaTag {
  name?: string;
  property?: string;
  content: string;
}

interface UseHeadOptions {
  title?: string;
  metaTags?: MetaTag[];
}

export const useHead = ({ title, metaTags = [] }: UseHeadOptions) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    const hasAuthor = metaTags.some(tag => tag.name === 'author');
    if (!hasAuthor) {
      metaTags.push({
        name: 'author',
        content: 'Tiago Pereira - Regency Hotel',
      });
    }

    metaTags.forEach(({ name, property, content }) => {
      const selector = name
        ? `meta[name="${name}"]`
        : property
        ? `meta[property="${property}"]`
        : null;

      if (!selector) return;

      let element = document.querySelector(selector) as HTMLMetaElement;

      if (!element) {
        element = document.createElement('meta');
        if (name) element.setAttribute('name', name);
        if (property) element.setAttribute('property', property);
        document.head.appendChild(element);
      }

      element.setAttribute('content', content);
    });
  }, [title, metaTags]);
};
