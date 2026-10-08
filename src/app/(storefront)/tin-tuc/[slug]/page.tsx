import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Calendar,
  Clock,
  ArrowRight,
  Share2,
  ChevronRight,
  Phone,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  Car,
  Bookmark,
  FileCheck,
} from "lucide-react";
import { ARTICLES, Article } from "../page";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export function generateMetadata({ params }: Props) {
  const article = ARTICLES.find((a) => a.slug === params.slug);
  if (!article) return { title: "Không tìm thấy bài viết | Toyota Biên Hòa" };

  return {
    title: `${article.title} | Toyota Biên Hòa`,
    description: article.summary,
  };
}

export default function ArticleDetailPage({ params }: Props) {
  const article = ARTICLES.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = ARTICLES.filter((a) => a.slug !== article.slug).slice(
    0,
    3
  );

  return (
    <div className="bg-[#FAFBFD] text-slate-900 min-h-screen">
      {/* Breadcrumb Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <nav className="flex items-center space-x-2 text-xs text-gray-500 overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-[#EB0A1E] transition">
              Trang chủ
            </Link>
            <ChevronRight className="w-3 h-3 text-gray-400 flex-shrink-0" />
            <Link href="/tin-tuc" className="hover:text-[#EB0A1E] transition">
              Tin tức & Sự kiện
            </Link>
            <ChevronRight className="w-3 h-3 text-gray-400 flex-shrink-0" />
            <span className="text-gray-800 font-medium truncate max-w-md">
              {article.title}
            </span>
          </nav>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Article Body (8 cols) */}
          <article className="lg:col-span-8 bg-white p-6 sm:p-10 rounded-2xl border border-gray-200 shadow-sm">
            {/* Meta tags */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-red-50 text-[#EB0A1E] border border-red-200 font-semibold text-xs px-3 py-1 rounded-full">
                {article.category}
              </span>
              <div className="flex items-center text-xs text-gray-500 gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-gray-400" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center text-xs text-gray-500 gap-1.5">
                <Clock className="w-3.5 h-3.5 text-gray-400" />
                <span>{article.readTime}</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3.5xl font-black text-gray-900 leading-tight tracking-tight mb-6">
              {article.title}
            </h1>

            {/* Lead Summary */}
            <p className="text-base sm:text-lg text-gray-700 font-medium leading-relaxed bg-slate-50 border-l-4 border-[#EB0A1E] p-4 sm:p-5 rounded-r-xl mb-8">
              {article.summary}
            </p>

            {/* Featured Image */}
            <div className="relative w-full h-[280px] sm:h-[420px] rounded-xl overflow-hidden mb-8 shadow-sm">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Rich Content Simulation */}
            <div className="space-y-6 text-gray-700 leading-relaxed text-[15px] sm:text-base">
              <p>
                Thị trường xe ô tô đã qua sử dụng luôn sôi động nhưng cũng tiềm ẩn không ít rủi ro đối với người mua nếu thiếu kiến thức thẩm định chuyên sâu hoặc không tiếp cận được các kênh xe chính hãng được kiểm định rõ ràng. Tại <strong>Toyota Biên Hòa</strong>, hệ thống <strong>Toyota Sure</strong> ra đời như một giải pháp bảo chứng toàn diện cho sự an tâm tuyệt đối của quý khách hàng.
              </p>

              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#EB0A1E] rounded-full inline-block"></span>
                1. Tiêu chuẩn khắt khe từ quy trình kiểm định 176 hạng mục
              </h2>
              <p>
                Mỗi chiếc xe khi được bàn giao đến tay người tiêu dùng đều phải vượt qua bài kiểm tra toàn diện 176 hạng mục kỹ thuật chuẩn Toyota toàn cầu. Các kỹ thuật viên tay nghề cao sử dụng trang thiết bị đo đạc điện tử hiện đại để phân tích từng chi tiết:
              </p>
              <ul className="space-y-2.5 my-4 pl-2">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Động cơ & Hệ dẫn động:</strong> Không cạy mở, nguyên bản từng ốc chân máy, không rò rỉ dung dịch, buồng đốt vận hành trơn tru.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Khung gầm & Keo chỉ:</strong> Cam kết 100% không đâm đụng ảnh hưởng tới kết cấu chịu lực Chassis. Mối hàn robot và đường keo chỉ nguyên bản nhà máy.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Không thủy kích, ngập nước:</strong> Soi kỹ hộp điều khiển ECU, hệ thống dây điện dưới sàn, các ngóc ngách chân ga/chân phanh không có dấu vết bùn đất.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Hồ sơ pháp lý:</strong> Nguồn gốc minh bạch, không tranh chấp, không cầm cố, không phạt nguội, sang tên hợp pháp 100%.</span>
                </li>
              </ul>

              {/* Callout Box */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-200/80 rounded-2xl p-6 my-8">
                <div className="flex items-center gap-3 mb-2">
                  <ShieldCheck className="w-6 h-6 text-[#EB0A1E]" />
                  <h3 className="font-bold text-gray-900 text-lg">
                    Cam Kết Vàng Của Toyota Biên Hòa
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Nếu phát hiện xe đã qua sử dụng mua tại Toyota Biên Hòa bị lỗi đâm đụng nặng, thủy kích hoặc tua đồng hồ km, đại lý cam kết thu hồi xe và bồi hoàn 100% giá trị hợp đồng ngay lập tức.
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-gray-700">
                  <span className="bg-white px-3 py-1.5 rounded-lg border border-red-100 shadow-xs">
                    ✓ Bảo hành 1 năm / 20.000 km
                  </span>
                  <span className="bg-white px-3 py-1.5 rounded-lg border border-red-100 shadow-xs">
                    ✓ Cứu hộ 24/7 toàn quốc
                  </span>
                  <span className="bg-white px-3 py-1.5 rounded-lg border border-red-100 shadow-xs">
                    ✓ Hỗ trợ vay trả góp 70%
                  </span>
                </div>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-[#EB0A1E] rounded-full inline-block"></span>
                2. Lợi ích khi giao dịch trực tiếp với đại lý ủy quyền
              </h2>
              <p>
                Khác biệt lớn nhất khi mua xe tại Toyota Biên Hòa so với các cơ sở kinh doanh tự do nằm ở giá trị bảo dưỡng tiếp nối. Khách hàng được cấp sổ bảo hành điện tử trên toàn hệ thống đại lý Toyota toàn quốc, dễ dàng tra cứu lịch sử bảo dưỡng và thay thế linh kiện chính hãng tại bất cứ tỉnh thành nào.
              </p>
              <p>
                Bên cạnh đó, đội ngũ chuyên viên tài chính TFS luôn túc trực để hỗ trợ các gói vay ưu đãi với thời gian phê duyệt chỉ trong 15 phút, thủ tục giải ngân trực tiếp trong ngày không mất chi phí thẩm định phát sinh.
              </p>
            </div>

            {/* Share & Tags */}
            <div className="border-t border-b border-gray-200 py-4 my-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
                <Bookmark className="w-4 h-4 text-[#EB0A1E]" />
                <span>Từ khóa:</span>
                <span className="bg-gray-100 px-2.5 py-1 rounded-md text-gray-700">Toyota Sure</span>
                <span className="bg-gray-100 px-2.5 py-1 rounded-md text-gray-700">Xe cũ chính hãng</span>
                <span className="bg-gray-100 px-2.5 py-1 rounded-md text-gray-700">Đồng Nai</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500 font-medium">Chia sẻ:</span>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent("https://toyotabienhoa.com/tin-tuc/" + article.slug)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
                  title="Chia sẻ lên Facebook"
                >
                  <Share2 className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Author / Dealer Box */}
            <div className="bg-slate-50 rounded-2xl p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-[#EB0A1E] text-white flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-sm">
                TS
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-base">
                  Ban Biên Tập Toyota Sure Biên Hòa
                </h4>
                <p className="text-xs text-gray-500 mt-0.5 mb-2">
                  Chuyên mục Tư vấn & Kiến thức kỹ thuật ô tô đã qua sử dụng
                </p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Mọi thông tin trong bài viết được kiểm duyệt bởi các chuyên gia kỹ thuật và định giá viên được chứng nhận bởi Toyota Motor Vietnam. Quý khách cần thêm thông tin vui lòng gọi trực tiếp hotline để được hỗ trợ nhanh nhất.
                </p>
              </div>
            </div>
          </article>

          {/* Sidebar (4 cols) */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Quick Contact Box */}
            <div className="bg-gradient-to-br from-[#111418] to-[#1e232a] text-white p-6 rounded-2xl shadow-lg border border-gray-800">
              <span className="inline-block bg-[#EB0A1E] text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded mb-3">
                Hotline 24/7
              </span>
              <h3 className="text-lg font-bold mb-1">Cần tư vấn trực tiếp?</h3>
              <p className="text-xs text-gray-400 mb-5">
                Chuyên viên Toyota Sure luôn sẵn sàng giải đáp mọi câu hỏi và gửi bảng giá xe lăn bánh ưu đãi nhất.
              </p>

              <div className="space-y-3">
                <a
                  href="tel:0938820355"
                  className="w-full bg-[#EB0A1E] hover:bg-red-700 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  <span>0938 820 355</span>
                </a>
                <a
                  href="https://zalo.me/0938820355"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition border border-white/10"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Chat Zalo Với Chuyên Viên</span>
                </a>
              </div>
            </div>

            {/* Fast Car Inventory Widget */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-900 text-base flex items-center gap-2">
                  <Car className="w-4 h-4 text-[#EB0A1E]" />
                  <span>Xe Nổi Bật Mới Về</span>
                </h3>
                <Link
                  href="/xe-cu"
                  className="text-xs font-semibold text-[#EB0A1E] hover:underline"
                >
                  Xem tất cả
                </Link>
              </div>

              <div className="space-y-3.5">
                <Link
                  href="/xe-cu/camry-25q-2022"
                  className="flex gap-3 group p-2 rounded-xl hover:bg-slate-50 transition"
                >
                  <div className="relative w-20 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src="/images/camry-2022.jpg"
                      alt="Camry 2.5Q"
                      fill
                      className="object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-gray-900 truncate group-hover:text-[#EB0A1E] transition">
                      Toyota Camry 2.5Q 2022
                    </h4>
                    <p className="text-[11px] text-gray-500 mt-0.5">Odo: 28.000 km</p>
                    <p className="text-xs font-extrabold text-[#EB0A1E] mt-1">
                      1.120.000.000 đ
                    </p>
                  </div>
                </Link>

                <Link
                  href="/xe-cu/fortuner-legender-2021"
                  className="flex gap-3 group p-2 rounded-xl hover:bg-slate-50 transition"
                >
                  <div className="relative w-20 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=400&q=80"
                      alt="Fortuner Legender"
                      fill
                      className="object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-gray-900 truncate group-hover:text-[#EB0A1E] transition">
                      Toyota Fortuner Legender 2021
                    </h4>
                    <p className="text-[11px] text-gray-500 mt-0.5">Odo: 42.000 km</p>
                    <p className="text-xs font-extrabold text-[#EB0A1E] mt-1">
                      985.000.000 đ
                    </p>
                  </div>
                </Link>

                <Link
                  href="/xe-cu/corolla-cross-18v-2022"
                  className="flex gap-3 group p-2 rounded-xl hover:bg-slate-50 transition"
                >
                  <div className="relative w-20 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=400&q=80"
                      alt="Corolla Cross 1.8V"
                      fill
                      className="object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold text-gray-900 truncate group-hover:text-[#EB0A1E] transition">
                      Corolla Cross 1.8V 2022
                    </h4>
                    <p className="text-[11px] text-gray-500 mt-0.5">Odo: 31.000 km</p>
                    <p className="text-xs font-extrabold text-[#EB0A1E] mt-1">
                      735.000.000 đ
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Trade In Fast Form */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-gray-900 text-base mb-2 flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-[#EB0A1E]" />
                <span>Định Giá Xe Cũ Của Bạn</span>
              </h3>
              <p className="text-xs text-gray-500 mb-4">
                Nhập thông tin xe bạn đang đi để nhận giá thẩm định thu mua cao hơn thị trường từ 10 - 20 triệu.
              </p>
              <form className="space-y-3" action="#">
                <input
                  type="text"
                  placeholder="Dòng xe & Năm sản xuất (VD: Vios 2020)"
                  className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-[#EB0A1E]"
                />
                <input
                  type="tel"
                  placeholder="Số điện thoại nhận báo giá *"
                  className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:border-[#EB0A1E]"
                />
                <button
                  type="button"
                  className="w-full bg-[#EB0A1E] hover:bg-red-700 text-white font-bold py-2.5 rounded-lg text-xs transition"
                >
                  Nhận Báo Giá Thẩm Định
                </button>
              </form>
            </div>
          </aside>
        </div>

        {/* Related Articles Section */}
        <section className="mt-16 pt-12 border-t border-gray-200">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-[#EB0A1E] text-xs font-bold uppercase tracking-wider">
                Xem Tiếp
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">
                Bài Viết Liên Quan Khác
              </h2>
            </div>
            <Link
              href="/tin-tuc"
              className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-[#EB0A1E] hover:gap-2.5 transition-all"
            >
              <span>Xem tất cả tin tức</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.slug}
                href={`/tin-tuc/${rel.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition flex flex-col"
              >
                <div className="relative w-full h-44 overflow-hidden">
                  <Image
                    src={rel.image}
                    alt={rel.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-[#EB0A1E] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                    {rel.category}
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-[11px] text-gray-500 mb-2">
                      <span>{rel.date}</span>
                      <span>•</span>
                      <span>{rel.readTime}</span>
                    </div>
                    <h3 className="font-bold text-sm text-gray-900 group-hover:text-[#EB0A1E] transition line-clamp-2 leading-snug">
                      {rel.title}
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#EB0A1E] mt-4">
                    Đọc tiếp <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* Standardized Bottom Dark Valuation Banner */}
      <section className="bg-gradient-to-r from-[#111418] via-[#1a1f26] to-[#111418] text-white py-14 sm:py-16 relative overflow-hidden border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-block bg-[#EB0A1E] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded">
                Dịch Vụ Thu Mua Xe Cũ Chính Hãng
              </span>
              <h2 className="text-2xl sm:text-3.5xl font-black text-white tracking-tight leading-snug">
                Bạn Đang Muốn Bán Xe Cũ Hoặc Lên Đời Xe Toyota Mới?
              </h2>
              <p className="text-gray-300 text-sm sm:text-base max-w-2xl leading-relaxed">
                Toyota Biên Hòa cam kết thẩm định minh bạch theo 176 hạng mục kỹ thuật, định giá cao hơn thị trường 10 - 20 triệu, thanh toán giải ngân ngay trong ngày.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="tel:0938820355"
                  className="bg-[#EB0A1E] hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl transition flex items-center gap-2 text-sm shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  <span>Hotline Thẩm Định: 0938 820 355</span>
                </a>
                <a
                  href="https://zalo.me/0938820355"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-xl transition border border-white/20 text-sm flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Định Giá Qua Zalo</span>
                </a>
              </div>
            </div>
            <div className="lg:col-span-4 hidden lg:block">
              <div className="relative w-full h-56 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/images/cta-camry.jpg"
                  alt="Định giá xe Toyota"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
