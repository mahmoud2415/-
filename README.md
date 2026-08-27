<div align="center">

# 🍔 Zinger Gourmet | مطعم زنجر

### *تطبيق ويب تقدمي (PWA) ومنيو إلكتروني تفاعلي لسلسلة مطاعم زنجر مع نظام طلب مباشر عبر واتساب*
### *A Modern Mobile-First Restaurant PWA & Digital Menu with WhatsApp Ordering*

<br/>

[![PWA Ready](https://img.shields.io/badge/PWA-Ready-F87171?style=for-the-badge&logo=pwa&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![JavaScript](https://img.shields.io/badge/Vanilla_JS-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)

<br/>

![Zinger App Preview](screen.png)

</div>

---

## 🌐 اللغات / Languages

- [🇸🇦 النسخة العربية](#-دليل-المشروع-باللغة-العربية)
- [🇬🇧 English Version](#-english-project-guide)

---

# 🇸🇦 دليل المشروع باللغة العربية

## 📑 جدول المحتويات
- [نظرة عامة](#-نظرة-عامة)
- [المميزات الرئيسية](#-المميزات-الرئيسية)
- [هيكل المشروع](#-هيكل-المشروع)
- [التقنيات المستخدمة](#-التقنيات-المستخدمة)
- [التشغيل المحلي](#-التشغيل-المحلي)
- [النشر على GitHub Pages أو الاستضافات السحابية](#-طرق-النشر-deployment)
- [نظام التصميم والألوان](#-نظام-التصميم)

---

## 🌟 نظرة عامة

**مطعم زنجر (Zinger Gourmet)** هو تطبيق ويب تقدمي (PWA) فائق السرعة وخفيف الوزن، تم تصميمه خصيصاً ليناسب الهواتف الذكية وأجهزة سطح المكتب بدون الحاجة لأي خادم خلفي (Serverless / Static).

يتيح التطبيق للعملاء تصفح قائمة الطعام الكاملة، وتخصيص الوجبات، وتحديد الفرع الأقرب، وإرسال الطلب بشكل منظم مباشرة عبر **واتساب (WhatsApp)** بضغطة زر واحدة.

---

## ✨ المميزات الرئيسية

### 🏢 1. إدارة الفروع المتعددة (Multi-Branch)
- **صفحة اختيار الفرع التفاعلية**: يختار العميل فرعه الأقرب (فرع الإسماعيلية، فاقوس المنشية، فاقوس كفر العدوى، أو أبو كبير).
- **بيانات مخصصة لكل فرع**: أرقام هواتف، روابط خرائط جوجل المباشرة (Google Maps)، ورقم واتساب مخصص لاستقبال طلبات كل فرع على حدة.
- **حفظ تلقائي للفرع المفضل**: في الذاكرة المحلية (`localStorage`) مع إمكانية التغيير في أي وقت.

### 📋 2. منيو تفاعلي وبحث ذكي
- **أقسام المنيو**: برجر لحم، كريب، بيتزا، باستا، وتش رول، حواوشي إيطالي، غرقانة جبنة، والمشروبات والإضافات.
- **شريط تصنيفات مع Scroll Spy**: تنقل فوري وسلس بين الأقسام.
- **محرك بحث عربي ذكي**: يقوم بتسوية الأحرف (Normalization) لتسهيل البحث وتجاهل الفروق بين (أ، إ، آ، ى، ي، ة، ه).

### 🛠️ 3. نافذة تخصيص الوجبات (Customization Modal)
- **سلايدر صور تفاعلي**: استعراض صور الوجبات مع مؤشرات نقطية (Carousel Dots).
- **تحديد المقاسات والأوزان**: مع تحديث فوري للحساب الإجمالي.
- **مستوى الشطة / الحرارة**: اختيار بين (عادي / سبايسي).
- **إضافات وصوصات اختيارية**: تخصيص كامل للوجبة.
- **إيماءات اللمس المتقدمة**: إمكانية سحب النافذة لأسفل لإغلاقها (Swipe / Drag-to-Dismiss) على شاشات اللمس.

### 🛒 4. سلة المشتريات والطلب عبر واتساب
- **درج سلة انسيابي (Cart Drawer)**: تعديل الكميات وحذف الأصناف بسهولة.
- **نوع الطلب**: الاختيار بين توصيل للمنزل (Delivery) مع كتابة العنوان، أو استلام من المطعم (Pickup).
- **حفظ بيانات العميل**: حفظ الاسم ورقم الهاتف والعنوان تلقائياً لتسريع الطلبات المستقبلية.
- **فورمات واتساب الذكي**: تجهيز رسالة واتساب منظمة تحتوي على تفاصيل الأصناف، المقاسات، الإضافات، والمجموع الكلي، وتوجيهها مباشرة لرقم الفرع المحدد.

### 📱 5. تطبيق ويب تقدمي (PWA)
- يعمل كـ **تطبيق هاتف مستقل (Standalone App)** بدون شريط المتصفح.
- ملف `sw.js` (Service Worker) للتخزين المؤقت وتحسين سرعة التحميل والعمل في وضع عدم الاتصال (Offline).
- إرشادات تثبيت مخصصة لكل من هواتف **Android** و **iOS (Safari)**.

---

## 📁 هيكل المشروع

```plaintext
Zinger/
├── index.html            # الصفحة الرئيسية وواجهة المستخدم
├── script.js             # منطق التطبيق، قائمة الأصناف، السلة والواتساب
├── style.css             # تخصيصات وتنسيقات CSS إضافية
├── sw.js                 # Service Worker للتخزين المؤقت والـ PWA
├── manifest.json         # إعدادات تطبيق الويب التقدمي (PWA Manifest)
├── DESIGN.md             # وثيقة نظام التصميم ولوحة الألوان
├── screen.png            # صورة معاينة لواجهة التطبيق
│
├── assets/               # الأصول والصور
│   ├── menu/             # صور المنيو بصيغة WebP
│   └── menu_items/       # مجلدات صور الأصناف
│
└── menu_items/           # صور وتصنيفات الوجبات
```

---

## 💻 التقنيات المستخدمة

- **HTML5 (Semantic & RTL)**: هيكل يدعم اتجاه النصوص من اليمين لليسار.
- **Tailwind CSS**: تصميم عصري ومتجاوب بالكامل مع الشاشات المختلفة.
- **Vanilla JavaScript (ES6+)**: أداء سريع وخفيف بدون أطر عمل معقدة.
- **Google Material Symbols & Fonts**: خطوط `Cairo` و `Montserrat` وأيقونات جوجل.
- **Web APIs**: Service Workers, Cache API, LocalStorage, Touch Events.

---

## 🚀 التشغيل المحلي

```bash
# 1. استنساخ المستودع
git clone https://github.com/mahmoud2415/-.git
cd -

# 2. تشغيل عبر Node.js
npx serve .

# أو تشغيل عبر Python
python3 -m http.server 8080
```
> [!NOTE]
> يفضل تشغيل المشروع على خادم محلي مثل `localhost` لكي تعمل ميزات الـ PWA والـ Service Worker بشكل سليم.

---

## 🌐 طرق النشر (Deployment)

### النشر على **GitHub Pages**:
1. ادخل إلى إعدادات المستودع على GitHub (**Settings** > **Pages**).
2. في قسم **Branch**، اختر `main` واضغط **Save**.
3. سيكون الموقع متاحاً على: `https://mahmoud2415.github.io/-/`

### النشر على **Vercel** أو **Netlify**:
المشروع عبارة عن موقع ثابت (Static Site)، بمجرد ربط المستودع سيتم النشر فوراً بدون أي خطوات إضافية (Zero Configuration).

---

## 🎨 نظام التصميم

يعتمد المشروع على نظام **"Fiery Night"** الزجاجي (Glassmorphism):

| العنصر | القيمة | الاستخدام |
| :--- | :--- | :--- |
| **الخلفية** | `#131313` | خلفية داكنة فخمة |
| **اللون الأساسي** | `#ff5625` / `#ad2b00` | أزرار الإجراء، والعناصر البارزة |
| **اللون الثانوي** | `#ffb59c` / `#b73a00` | حواف التفاعل وحالات الـ Hover |
| **لون التمييز (Gold)** | `#fbbc00` | شارات الأسعار والتقييمات |
| **الخط الأساسي** | `Cairo` | العناوين والنصوص العربية |
| **خط الأرقام** | `Montserrat` | الأسعار والأرقام والكميات |

---
<br/>

# 🇬🇧 English Project Guide

## 📑 Table of Contents
- [Overview](#-overview-1)
- [Key Features](#-key-features-1)
- [Project Structure](#-project-structure-1)
- [Tech Stack](#-tech-stack-1)
- [Getting Started](#-getting-started)
- [Deployment](#-deployment)
- [License](#-license)

---

## 🌟 Overview

**Zinger Gourmet** is a high-performance, mobile-first Progressive Web App (PWA) designed for modern restaurant ordering. It offers a rich digital menu experience, meal customizations, multi-branch routing, and instant checkout via **WhatsApp**, all with zero backend requirements.

---

## ✨ Key Features

- 📍 **Multi-Branch Selection**: Supports multiple branches with custom phone numbers, WhatsApp lines, and Google Maps directions.
- 🍔 **Interactive Digital Menu**: Dynamic categories, Arabic search filter with text normalization, and scroll-spy navigation.
- 🎛️ **Product Customization Modal**: Real-time price updates for sizes, spicy level toggles, side add-ons, image slider, and drag-to-dismiss gesture.
- 🛒 **Smart Cart & WhatsApp Checkout**: Automated formatted WhatsApp message generator with delivery/pickup options and address autofill.
- 📱 **Progressive Web App (PWA)**: Full offline support via Service Worker (`sw.js`), app manifest, and custom install banners for iOS & Android.
- 🎨 **Glassmorphism UI**: "Fiery Night" theme built with Tailwind CSS and Cairo typography.

---

## 📁 Project Structure

```plaintext
Zinger/
├── index.html            # Main markup and UI layout
├── script.js             # App logic, menu state, cart & WhatsApp formatter
├── style.css             # Additional custom styles
├── sw.js                 # Service worker for offline caching
├── manifest.json         # PWA configuration
├── DESIGN.md             # Design tokens & style guide
├── screen.png            # App preview screenshot
│
├── assets/               # Media & menu assets
│   ├── menu/             # Optimized WebP items
│   └── menu_items/       # Item categories
│
└── menu_items/           # Original menu category photos
```

---

## 💻 Tech Stack

- **Frontend**: HTML5, Tailwind CSS, Vanilla JavaScript (ES6+).
- **Fonts & Icons**: Cairo Font, Montserrat, Google Material Symbols.
- **PWA**: Service Worker API, Cache API, Web App Manifest.

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/mahmoud2415/-.git
cd -

# Run local web server
npx serve .
# or
python3 -m http.server 8080
```

---

## 🌐 Deployment

- **GitHub Pages**: Go to `Settings > Pages`, choose the `main` branch, and click `Save`.
- **Vercel / Netlify**: Deploy as a static site in one click with zero build configuration.

---

## 📄 License

Distributed under the **MIT License**. Feel free to use, modify, and build upon this project.
