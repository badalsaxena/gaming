"use client";
import { useState, useEffect, useRef } from 'react';

/**
 * Custom hook for creating animations that repeat every time an element enters the viewport
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Visibility threshold (0-1) for triggering animation
 * @param {string} options.rootMargin - Margin around the root element
 * @returns {Object} - Animation control objects and ref to attach to the element
 */
export function useRepeatingAnimation({ threshold = 0.1, rootMargin = "0px" } = {}) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Update the inView state based on the element's visibility
          // This will trigger animation when element enters viewport
          // and reset it when element leaves viewport
          setIsInView(entry.isIntersecting);
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin]);

  return {
    ref,
    isInView
  };
}

/**
 * Hook for fade-in animation that repeats on viewport entry
 */
export function useFadeInAnimation(options) {
  const { ref, isInView } = useRepeatingAnimation(options);
  
  return {
    ref,
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
  };
}

/**
 * Hook for slide-in-left animation that repeats on viewport entry
 */
export function useSlideInLeftAnimation(options) {
  const { ref, isInView } = useRepeatingAnimation(options);
  
  return {
    ref,
    animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }
  };
}

/**
 * Hook for slide-in-right animation that repeats on viewport entry
 */
export function useSlideInRightAnimation(options) {
  const { ref, isInView } = useRepeatingAnimation(options);
  
  return {
    ref,
    animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }
  };
}

/**
 * Hook for zoom-in animation that repeats on viewport entry
 */
export function useZoomInAnimation(options) {
  const { ref, isInView } = useRepeatingAnimation(options);
  
  return {
    ref,
    animate: isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
  };
}

/**
 * Hook for a rotating animation that repeats on viewport entry
 */
export function useRotateAnimation(options) {
  const { ref, isInView } = useRepeatingAnimation(options);
  
  return {
    ref,
    animate: isInView ? { opacity: 1, rotate: 0 } : { opacity: 0, rotate: -15 }
  };
}