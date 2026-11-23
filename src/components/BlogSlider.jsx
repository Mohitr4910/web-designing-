import React, { useRef, useEffect } from 'react';
import BlogCard from './BlogCard';

/**
 * Homepage blog slider.
 *  - posts <= minToSlide  -> normal grid (jaise pehle tha)
 *  - posts >  minToSlide  -> cards lagataar (infinite) side me chalte rehte hain
 *  - mouse/touch hover ya keyboard focus par ruk jata hai
 *  - "reduce motion" wale users ke liye animation band, haath se scroll
 */
export default function BlogSlider({ posts = [], minToSlide = 3 }) {
  const cloneRef = useRef(null);

  // Duplicate copy ko keyboard/screen-reader se hata do (sirf loop ke liye hai)
  useEffect(() => {
    if (cloneRef.current) cloneRef.current.inert = true;
  }, []);

  if (!posts.length) return null;

  if (posts.length <= minToSlide) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map(post => <BlogCard key={post.id} post={post} />)}
      </div>
    );
  }

  // Jitne zyada posts, utna lamba duration (speed same rehti hai)
  const duration = `${posts.length * 7}s`;

  return (
    <div className="blog-marquee">
      <div className="blog-marquee-track" style={{ '--marquee-duration': duration }}>
        <div className="blog-marquee-group">
          {posts.map(post => (
            <div key={post.id} className="blog-marquee-item">
              <BlogCard post={post} />
            </div>
          ))}
        </div>
        <div className="blog-marquee-group" aria-hidden="true" ref={cloneRef}>
          {posts.map(post => (
            <div key={`clone-${post.id}`} className="blog-marquee-item">
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
