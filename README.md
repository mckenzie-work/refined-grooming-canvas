
# Precision Barbershop - Premium Booking Website

A world-class React-based booking website for a premium barbershop, featuring minimalist black & white aesthetics inspired by Stripe, Frama, and Ritual.

## 🎯 Project Overview

This is a visually striking, technically clean booking platform designed for award-level UX/UI with future Django backend integration capabilities.

## 🚀 Features

### Pages Implemented
- **Home Page**: Fullscreen hero video with elegant navigation
- **Booking Page**: Clean form with Django integration points
- **Gallery Page**: Horizontal scroll gallery with image modal
- **Admin Page**: Authentication scaffold for future development

### Design System
- **Palette**: Black, white, neutral grays with subtle rose/chrome accents
- **Typography**: Space Grotesk (headlines) + Inter (body)
- **Animations**: Subtle, motion-safe transitions
- **Layout**: Generous white space and editorial composition

## 🛠 Technical Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **State Management**: TanStack Query
- **Routing**: React Router DOM

## 📦 Installation & Setup

```bash
# Clone the repository
git clone <repository-url>
cd precision-barbershop

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🔌 Backend Integration Points

### Django API Endpoints (To Implement)

```python
# Booking endpoints
POST /api/bookings/          # Create new booking
GET  /api/bookings/          # List all bookings (admin)
GET  /api/bookings/{id}/     # Get booking details
PUT  /api/bookings/{id}/     # Update booking
DELETE /api/bookings/{id}/   # Cancel booking

# Authentication endpoints
POST /api/auth/login/        # Admin login
POST /api/auth/logout/       # Admin logout
GET  /api/auth/user/         # Get current user

# Availability endpoints
GET /api/availability/       # Get available time slots
```

### Form Submission Integration

Replace the placeholder in `src/pages/Booking.tsx`:

```typescript
// Current placeholder
await new Promise(resolve => setTimeout(resolve, 1500));

// Replace with Django API call
const response = await fetch('/api/bookings/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-CSRFToken': getCsrfToken(),
  },
  body: JSON.stringify({
    customer_name: formData.name,
    phone_number: formData.phone,
    service_type: formData.service,
    appointment_date: formData.date,
    appointment_time: formData.time,
    notes: formData.notes
  })
});
```

## 🎨 Design Guidelines

### Color Palette
```css
/* Primary Colors */
--barbershop-black: #0a0a0a
--barbershop-charcoal: #1a1a1a
--barbershop-rose: #d4a574
--barbershop-chrome: #e5e7eb

/* Gray Scale */
--barbershop-gray-50: #fafafa
--barbershop-gray-100: #f4f4f5
--barbershop-gray-900: #18181b
```

### Typography Scale
- **Headlines**: Space Grotesk (300, 400, 500)
- **Body Text**: Inter (300, 400, 500, 600)
- **Buttons**: Inter Medium (500)

### Component Classes
```css
.premium-input     /* Large, touch-friendly inputs */
.premium-button    /* Primary CTA buttons */
.premium-button-outline /* Secondary buttons */
.grain-overlay     /* Subtle texture overlay */
```

## 📱 Responsive Design

- **Mobile First**: Designed for touch interfaces
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch Targets**: Minimum 44px for interactive elements
- **Performance**: Optimized images and lazy loading

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- High contrast ratios
- Focus management

## 🔒 Security Considerations

When integrating with Django backend:

```python
# Add CSRF protection
from django.middleware.csrf import get_token

# Rate limiting
from django_ratelimit.decorators import ratelimit

@ratelimit(key='ip', rate='5/m', method='POST')
def create_booking(request):
    # Booking creation logic
    pass

# Input validation
from django.core.validators import validate_email
from django.core.exceptions import ValidationError
```

## 📄 Environment Variables

Create `.env` file:

```bash
# API Configuration
VITE_API_BASE_URL=http://localhost:8000/api
VITE_DJANGO_CSRF_COOKIE_NAME=csrftoken

# Analytics (Optional)
VITE_GA_TRACKING_ID=your-ga-id
VITE_HOTJAR_ID=your-hotjar-id

# Feature Flags
VITE_ENABLE_ADMIN=true
VITE_ENABLE_ANALYTICS=false
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

## 📊 Performance Optimization

- **Images**: WebP format with fallbacks
- **Videos**: Multiple formats (.mp4, .webm)
- **Fonts**: Preloaded critical fonts
- **Code Splitting**: Route-based chunks
- **Bundle Size**: Tree-shaking enabled

## 🧪 Testing

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Performance audit
npm run lighthouse
```

## 📈 Analytics Integration

```typescript
// Google Analytics 4
gtag('event', 'booking_started', {
  event_category: 'engagement',
  event_label: 'booking_form'
});

// Custom events
analytics.track('Appointment Booked', {
  service: formData.service,
  date: formData.date,
  value: getServicePrice(formData.service)
});
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📝 License

This project is proprietary software. All rights reserved.

## 📞 Support

For technical support or questions:
- Email: dev@precisionbarbershop.com
- Phone: (555) 123-4567

---

**Built with ❤️ for exceptional barbershop experiences**
