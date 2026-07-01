document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // 1. GLOBAL STICKY HEADER & MOBILE NAV
  // ==========================================
  const header = document.querySelector('.header');
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Sticky Navigation on Scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Toggle Hamburger Menu
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking nav links
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  // ==========================================
  // 2. TESTIMONIAL SLIDER (Home Page)
  // ==========================================
  const slides = document.querySelectorAll('.testimonial-slide');
  const dots = document.querySelectorAll('.slider-dot');
  let currentSlide = 0;
  let slideInterval;

  if (slides.length > 0 && dots.length > 0) {
    const showSlide = (n) => {
      slides.forEach(slide => {
        slide.classList.remove('active');
        slide.style.display = 'none';
      });
      dots.forEach(dot => dot.classList.remove('active'));

      currentSlide = (n + slides.length) % slides.length;
      slides[currentSlide].style.display = 'flex';
      // Tiny delay to trigger CSS transitions
      setTimeout(() => {
        slides[currentSlide].classList.add('active');
      }, 20);
      dots[currentSlide].classList.add('active');
    };

    const nextSlide = () => {
      showSlide(currentSlide + 1);
    };

    const startSlideShow = () => {
      slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    };

    const resetSlideShow = () => {
      clearInterval(slideInterval);
      startSlideShow();
    };

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        showSlide(index);
        resetSlideShow();
      });
    });

    // Initialize first slide and start slideshow
    showSlide(0);
    startSlideShow();
  }

  // ==========================================
  // 3. FAQ ACCORDION (About Page)
  // ==========================================
  const faqQuestions = document.querySelectorAll('.faq-question');

  if (faqQuestions.length > 0) {
    faqQuestions.forEach(question => {
      question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');
        const faqAnswer = faqItem.querySelector('.faq-answer');

        // Close all other active FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
          item.classList.remove('active');
          item.querySelector('.faq-answer').style.maxHeight = null;
        });

        // Toggle clicked FAQ item
        if (!isActive) {
          faqItem.classList.add('active');
          faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px';
        }
      });
    });
  }

  // ==========================================
  // 4. PACKAGES CATEGORY FILTER (Packages Page)
  // ==========================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const packageCards = document.querySelectorAll('.package-card');

  if (filterBtns.length > 0 && packageCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Toggle Active Button Class
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.getAttribute('data-filter');

        packageCards.forEach(card => {
          const cardCategory = card.getAttribute('data-category');
          
          if (category === 'all' || cardCategory === category) {
            card.style.display = 'flex';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 50);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  }

  // ==========================================
  // 5. LIGHTBOX COMPONENT (Gallery Page)
  // ==========================================
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  
  if (galleryItems.length > 0 && lightbox) {
    const lightboxImg = lightbox.querySelector('img');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');
    const lightboxClose = lightbox.querySelector('.lightbox-close');

    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const title = item.querySelector('h3').textContent;
        const category = item.querySelector('p').textContent;

        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightboxCaption.textContent = `${title} (${category})`;
        
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Lock background scroll
      });
    });

    const closeLightbox = () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = 'auto'; // Re-enable scroll
    };

    lightboxClose.addEventListener('click', closeLightbox);
    
    // Close lightbox on clicking dark overlay background
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    // Close lightbox on pressing Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
      }
    });
  }

  // ==========================================
  // 6. CONTACT & BOOKING FORM VALIDATION (Contact Page)
  // ==========================================
  const bookingForm = document.getElementById('bookingForm');
  const successModal = document.getElementById('successModal');
  const modalClose = document.getElementById('modalClose');

  if (bookingForm && successModal) {
    // Regex Patterns for Validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const phonePattern = /^[0-9]{10}$/;

    // Helper functions to show/remove errors
    const showError = (inputElement, message) => {
      const parent = inputElement.parentElement;
      parent.classList.add('error');
      const errorDiv = parent.querySelector('.form-error');
      if (errorDiv) {
        errorDiv.textContent = message;
      }
    };

    const clearError = (inputElement) => {
      const parent = inputElement.parentElement;
      parent.classList.remove('error');
    };

    // Live validation feedback on input / blur
    const validateField = (input) => {
      const value = input.value.trim();
      const id = input.id;

      if (!value) {
        showError(input, 'This field is required.');
        return false;
      }

      if (id === 'email') {
        if (!emailPattern.test(value)) {
          showError(input, 'Please enter a valid email address.');
          return false;
        }
      }

      if (id === 'phone') {
        if (!phonePattern.test(value)) {
          showError(input, 'Please enter a valid 10-digit mobile number.');
          return false;
        }
      }

      if (id === 'travelers') {
        const count = parseInt(value);
        if (isNaN(count) || count < 1) {
          showError(input, 'Please enter at least 1 traveler.');
          return false;
        }
      }

      if (id === 'date') {
        const selectedDate = new Date(value);
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Normalize time
        if (selectedDate < today) {
          showError(input, 'Travel date cannot be in the past.');
          return false;
        }
      }

      clearError(input);
      return true;
    };

    // Attach listeners for live feedback
    const inputs = bookingForm.querySelectorAll('.form-control');
    inputs.forEach(input => {
      input.addEventListener('blur', () => validateField(input));
      input.addEventListener('input', () => {
        if (input.parentElement.classList.contains('error')) {
          validateField(input);
        }
      });
    });

    // Form Submit Event Handler
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isFormValid = true;

      inputs.forEach(input => {
        const isValid = validateField(input);
        if (!isValid) {
          isFormValid = false;
        }
      });

      if (isFormValid) {
        // Show success confirmation modal
        successModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Reset form details
        bookingForm.reset();
      }
    });

    // Modal Close Trigger
    if (modalClose) {
      modalClose.addEventListener('click', () => {
        successModal.classList.remove('active');
        document.body.style.overflow = 'auto';
      });
    }

    successModal.addEventListener('click', (e) => {
      if (e.target === successModal) {
        successModal.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  }
});
