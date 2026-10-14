# 🛒 BazarDor (বাজার দর) - Daily Market Price Tracker

**BazarDor** is a modern price-tracking web application designed to help users track and monitor daily commodity prices in Bangladesh. Built with a fast, intuitive, and fully responsive Bengali user interface, it provides real-time market insights, daily price fluctuations, and category-wise product filtering.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router & Turbopack)
- **Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **State & Auth Management:** React Context API (`AuthContext`)
- **Notifications:** [React Hot Toast](https://react-hot-toast.com/)
- **Language:** TypeScript
- **Icons & Assets:** Native Emojis & Custom Graphics

---

## ✨ Key Features

1. **📊 Real-time Commodity Tracking:** View today's prices alongside comparative metrics (minimum, maximum, average) and percentage price changes (risers & fallers).
2. **🏷️ Category-Based Filtering:** Seamlessly browse products categorized into Rice, Pulses, Oil, Vegetables, Fish, Meat, Eggs/Milk, and Spices.
3. **🔢 Bengali Localization (`toBengaliNumber`):** Built-in defensive number conversion logic for flawless Bengali numeral formatting across all prices and stats.
4. **🔒 Protected Auth & Profile Management:** LocalStorage-persisted authentication flow featuring custom profile updates and seamless background redirects for unauthenticated users.
5. **📱 Fully Responsive Design:** Optimized UI layouts tailored for smooth user experience across mobile, tablet, and desktop devices.

---

## 📁 Project Structure

```text
src/
├── app/
│   ├── category/
│   │   └── [slug]/
│   │       └── page.tsx        # Category-wise product listing
│   ├── product/
│   │   └── [id]/
│   │       ├── loading.tsx
│   │       ├── not-found.tsx
│   │       └── page.tsx        # Protected product details page
│   ├── profile/
│   │   └── page.tsx            # User profile update page
│   ├── signin/
│   │   └── page.tsx            # Sign in page
│   ├── signup/
│   │   └── page.tsx            # Sign up page
│   ├── error.tsx               # Global error boundary
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Homepage
│   └── providers.tsx           # Global context providers
├── components/
│   ├── Navbar.tsx              # Sticky navbar with marquee ticker & dropdown
│   └── SortDropdown.tsx        # Dynamic price sorting component
├── context/
│   └── AuthContext.tsx         # User authentication state
├── lib/
│   ├── api.ts                  # API fetching & Bengali number conversion logic
│   └── date.ts                 # Bengali date formatter
└── types/
    └── product.ts              # TypeScript interfaces