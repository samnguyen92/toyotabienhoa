import React from "react";

export function AutoDealerSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    "name": "Toyota Biên Hòa - Xe Đã Qua Sử Dụng Chính Hãng Toyota Sure",
    "alternateName": "Toyota Sure Biên Hòa",
    "url": "https://toyotabienhoa.com.vn",
    "logo": "https://toyotabienhoa.com.vn/images/toyota-logo.png",
    "image": "https://toyotabienhoa.com.vn/images/showroom-hero.jpg",
    "description": "Trung tâm xe đã qua sử dụng chính hãng Toyota Sure hàng đầu tại Đồng Nai & Tiền Giang. Kiểm định 176 hạng mục, bảo hành 1 năm hoặc 20.000km, cam kết không đâm đụng, không ngập nước.",
    "telephone": "+84938820355",
    "priceRange": "$$$",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Số 01/1A Xa lộ Hà Nội, Phường Tam Hòa",
        "addressLocality": "TP. Biên Hòa",
        "addressRegion": "Đồng Nai",
        "addressCountry": "VN"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "96 Ấp Tây, Xã Hòa Hưng",
        "addressLocality": "Huyện Cái Bè",
        "addressRegion": "Tiền Giang",
        "addressCountry": "VN"
      }
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "10.9574",
      "longitude": "106.8427"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "07:30",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/toyotabienhoa",
      "https://zalo.me/0938820355"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
