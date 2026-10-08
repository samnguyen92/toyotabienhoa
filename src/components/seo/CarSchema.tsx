import React from "react";
import { Car } from "@/types/car";
import { getCarImageUrl } from "@/data/mockCars";

interface Props {
  car: Car;
}

export function CarSchema({ car }: Props) {
  const imageUrl = getCarImageUrl(car.images?.[0]);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Car",
    "name": car.title,
    "brand": {
      "@type": "Brand",
      "name": car.brand,
    },
    "model": car.model,
    "vehicleModelDate": car.year.toString(),
    "mileageFromOdometer": {
      "@type": "QuantitativeValue",
      "value": car.mileage,
      "unitCode": "KMT",
    },
    "itemCondition": "https://schema.org/UsedCondition",
    "fuelType": car.fuel_type,
    "vehicleTransmission": car.transmission,
    "numberOfDoors": 4,
    "seatingCapacity": car.seats || 5,
    "color": car.color,
    "image": imageUrl,
    "description": car.description || `${car.title} đã qua sử dụng đạt chuẩn 176 hạng mục kiểm định Toyota Sure.`,
    "offers": {
      "@type": "Offer",
      "price": car.price,
      "priceCurrency": "VND",
      "availability": car.status === "Đã bán" ? "https://schema.org/SoldOut" : "https://schema.org/InStock",
      "seller": {
        "@type": "AutoDealer",
        "name": "Toyota Biên Hòa",
        "telephone": "+84938820355",
        "url": "https://toyotabienhoa.com.vn",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
