import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  Tag,
  Phone,
  MessageSquare,
  Search,
} from "lucide-react";

export const metadata = {
  title: "Tin Tức, Sự Kiện & Khuyến Mãi | Toyota Biên Hòa",
  description:
    "Cập nhật tin tức thị trường xe đã qua sử dụng, chương trình ưu đãi giảm giá tháng, kinh nghiệm chọn mua xe lướt Toyota Sure chính hãng tại Toyota Biên Hòa.",
};

export interface Article {
  slug: string;
  title: string;
  category: "Khuyến mãi" | "Kinh nghiệm" | "Thị trường" | "Công nghệ";
  date: string;
  readTime: string;
  image: string;
  summary: string;
}

export const ARTICLES: Article[] = [
  {
    slug: "chuong-trinh-uu-dai-mua-xe-luot-thang-10",
    title: "Chương Trình Ưu Đãi 'Tháng Vàng Toyota Sure': Tặng Gói Bảo Dưỡng 1 Năm & Giảm 20 Triệu",
    category: "Khuyến mãi",
    date: "05/10/2026",
    readTime: "3 phút đọc",
    image: "/images/camry-2022.jpg",
    summary:
      "Toyota Biên Hòa áp dụng chính sách ưu đãi đặc biệt cho tất cả khách hàng đặt cọc mua xe đã qua sử dụng chính hãng trong tháng này. Hỗ trợ 100% lệ phí trước bạ cho nhiều dòng xe nổi bật.",
  },
  {
    slug: "kinh-nghiem-kiem-tra-xe-oto-cu-tranh-tai-nan-thuy-kich",
    title: "5 Dấu Hiệu Nhận Biết Xe Cũ Từng Bị Thủy Kích Hoặc Tai Nạn Mà Người Mua Cần Phải Biết",
    category: "Kinh nghiệm",
    date: "02/10/2026",
    readTime: "5 phút đọc",
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Hướng dẫn chi tiết từ chuyên gia thẩm định Toyota Sure cách kiểm tra keo chỉ, ốc chân máy, mùi nội thất và hệ thống dây điện để tránh mua phải xe ngập nước kém chất lượng.",
  },
  {
    slug: "so-sanh-toyota-camry-25q-va-corolla-cross-18v",
    title: "Tầm Tài Chính 800 - 900 Triệu: Nên Chọn Sedan Hạng D Toyota Camry Cũ Hay Crossover Gầm Cao?",
    category: "Thị trường",
    date: "28/09/2026",
    readTime: "6 phút đọc",
    image: "/images/cta-camry.jpg",
    summary:
      "Phân tích ưu nhược điểm giữa sự sang trọng êm ái đỉnh cao của Camry 2.5Q và tính thực dụng đa dụng gầm cao của Corolla Cross 1.8V cho nhu cầu gia đình và công việc.",
  },
  {
    slug: "huong-dan-thu-tuc-vay-mua-xe-tra-gop-qua-tfs",
    title: "Hướng Dẫn Thủ Tục Vay Mua Xe Trả Góp TFS Toyota Chi Tiết Từ A Đến Z",
    category: "Kinh nghiệm",
    date: "24/09/2026",
    readTime: "4 phút đọc",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Tất tần tật quy trình xét duyệt hồ sơ vay trả góp TFS, lãi suất ưu đãi cố định và mẹo chứng minh thu nhập giúp hồ sơ được duyệt nhanh chóng trong ngày.",
  },
  {
    slug: "cong-nghe-toyota-hybrid-ben-bi-tiet-kiem",
    title: "Xe Hybrid Cũ Có Đáng Mua? Tuổi Thọ Pin Toyota Hybrid Và Chi Phí Vận Hành Thực Tế",
    category: "Công nghệ",
    date: "18/09/2026",
    readTime: "5 phút đọc",
    image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80",
    summary:
      "Đánh giá độ bền bỉ của hệ truyền động xăng điện Hybrid Toyota sau 3-5 năm sử dụng. Mức tiêu hao nhiên liệu ấn tượng chỉ 4.2L/100km và chế độ bảo hành pin chính hãng.",
  },
  {
    slug: "dich-vu-thu-mua-xe-cu-doi-xe-moi-toyota-bien-hoa",
    title: "Dịch Vụ Thu Mua Xe Cũ Giá Cao & Đổi Xe Mới (Trade-in) Tận Nhà Tại Đồng Nai",
    category: "Khuyến mãi",
    date: "12/09/2026",
    readTime: "3 phút đọc",
    image: "/images/showroom-hero.jpg",
    summary:
      "Chương trình thu cũ đổi mới tạo điều kiện thuận lợi nhất cho khách hàng lên đời xe Toyota thế hệ mới với mức giá thẩm định minh bạch, giải ngân ngay trong ngày.",
  },
];

export default function NewsPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const selectedCategory = searchParams.category || "Tất cả";

  const categories = [
    "Tất cả",
    "Khuyến mãi",
    "Kinh nghiệm",
    "Thị trường",
    "Công nghệ",
  ];

  const filteredArticles =
    selectedCategory === "Tất cả"
      ? ARTICLES
      : ARTICLES.filter((a) => a.category === selectedCategory);

  const featured = ARTICLES[0];

  return (
    <div className="bg-[#FAFBFD] min-h-screen">
      {/* 1. HERO BANNER */}
      <section className="relative bg-[#FAFAFC] border-b border-gray-150 overflow-hidden pt-8 pb-14">
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[55%] pointer-events-none z-0">
          <Image
            src="/images/showroom-hero.jpg"
            alt="Toyota Biên Hòa Showroom"
            fill
            priority
            className="object-cover object-right-top opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAFAFC] via-[#FAFAFC]/90 to-transparent lg:from-[#FAFAFC] lg:via-[#FAFAFC]/60 lg:to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-4">
            <Link href="/" className="hover:text-toyota-red transition-colors">
              Trang chủ
            </Link>
            <span>&gt;</span>
            <span className="text-gray-900 font-semibold">Tin tức</span>
            <span className="text-gray-400">—</span>
          </div>

          <div className="max-w-2xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-toyota-red uppercase">
              <span className="w-5 h-0.5 bg-toyota-red inline-block" />
              <span>BẢN TIN TOYOTA BIÊN HÒA</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-[1.15]">
              Tin Tức, Sự Kiện & Khuyến Mãi<br />
              <span className="text-toyota-red">Cập Nhật Mới Nhất 2026</span>
            </h1>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Cung cấp kiến thức chọn mua xe ô tô đã qua sử dụng, thông tin chính sách bảo hành Toyota Sure và các chương trình ưu đãi đặc quyền tại đại lý Toyota Biên Hòa.
            </p>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY FILTER TABS */}
      <section className="py-8 bg-white border-b border-gray-150 sticky top-20 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <Link
                  key={cat}
                  href={cat === "Tất cả" ? "/tin-tuc" : `/tin-tuc?category=${encodeURIComponent(cat)}`}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
                    isActive
                      ? "bg-toyota-red text-white shadow-sm"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. FEATURED SPOTLIGHT ARTICLE (When on "Tất cả") */}
      {selectedCategory === "Tất cả" && (
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative bg-white rounded-3xl border border-gray-150 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                <div className="lg:col-span-7 relative aspect-[16/10] lg:h-[400px] w-full overflow-hidden bg-gray-100">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-toyota-red text-white shadow-md">
                      Tiêu điểm
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 p-6 sm:p-10 space-y-4">
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span className="font-semibold text-toyota-red">{featured.category}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {featured.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {featured.readTime}
                    </span>
                  </div>

                  <Link href={`/tin-tuc/${featured.slug}`}>
                    <h2 className="text-xl sm:text-2xl font-black text-gray-900 group-hover:text-toyota-red transition-colors leading-tight">
                      {featured.title}
                    </h2>
                  </Link>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {featured.summary}
                  </p>

                  <div className="pt-2">
                    <Link
                      href={`/tin-tuc/${featured.slug}`}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-toyota-red hover:underline group/btn"
                    >
                      <span>Đọc bài viết chi tiết</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. ARTICLES GRID */}
      <section className="py-12 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight">
              {selectedCategory === "Tất cả" ? "Bài Viết Mới Nhất" : `Chuyên mục: ${selectedCategory}`}
            </h3>
            <span className="text-xs text-gray-500 font-medium">
              {filteredArticles.length} bài viết
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.slug}
                className="bg-white rounded-2xl border border-gray-150 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                  <Link href={`/tin-tuc/${article.slug}`}>
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </Link>
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-black/75 backdrop-blur-sm text-white">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1 space-y-3">
                  <div className="flex items-center gap-2 text-[11px] text-gray-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{article.date}</span>
                    <span>•</span>
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </div>

                  <Link href={`/tin-tuc/${article.slug}`}>
                    <h4 className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-toyota-red transition-colors line-clamp-2 leading-snug">
                      {article.title}
                    </h4>
                  </Link>

                  <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed flex-1">
                    {article.summary}
                  </p>

                  <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs">
                    <Link
                      href={`/tin-tuc/${article.slug}`}
                      className="inline-flex items-center gap-1 font-semibold text-toyota-red hover:underline"
                    >
                      <span>Đọc tiếp</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BOTTOM VALUATION BANNER */}
      <section className="relative overflow-hidden bg-[#0A0D14] text-white py-14 sm:py-18">
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 pointer-events-none">
          <Image
            src="/images/cta-camry.jpg"
            alt="Toyota Camry Headlight"
            fill
            className="object-cover object-center lg:object-right opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0D14] via-[#0A0D14]/85 to-transparent lg:from-[#0A0D14] lg:via-[#0A0D14]/50 lg:to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-toyota-red uppercase">
              <span className="w-5 h-0.5 bg-toyota-red inline-block" />
              <span>TOYOTA BIÊN HÒA</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Bạn Có Nhu Cầu Định Giá Hoặc Bán Lại Chiếc Xe Của Mình?
            </h2>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Toyota Biên Hòa hỗ trợ định giá xe nhanh chóng, minh bạch và chuyên nghiệp. Liên hệ ngay để được tư vấn và hỗ trợ tốt nhất.
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-3">
              <a
                href="tel:0938820355"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-toyota-red hover:bg-toyota-hover text-white text-xs sm:text-sm font-bold shadow-md transition-all active:scale-[0.98]"
              >
                <Phone className="w-4 h-4" />
                <span>Hotline: 0938 820 355</span>
              </a>

              <Link
                href="/xe-cu#dinh-gia"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-gray-700 bg-black/40 hover:bg-white/10 text-gray-200 hover:text-white text-xs sm:text-sm font-semibold transition-all group"
              >
                <MessageSquare className="w-4 h-4 text-gray-400 group-hover:text-white" />
                <span>Được tư vấn miễn phí</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
