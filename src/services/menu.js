export async function getLeftMenuData() {
  return [
    {
      title: 'Tổng quan',
      key: 'category',
      url: ['/tong-quan'],
      icon: 'icon icon-dashboard',
      permission: [],
      pro: true,
    },
    {
      title: 'Quản lý booking',
      key: 'booking',
      url: ['/booking', '/booking/:id/chi-tiet'],
      icon: 'icon icon-calendar',
      permission: [],
      pro: true,
    },
    {
      title: 'Quản lý dịch vụ',
      key: 'services',
      url: ['/quan-ly-dich-vu', '/quan-ly-dich-vu/them-moi', '/quan-ly-dich-vu/:id/chi-tiet'],
      icon: 'icon icon-agenda',
      permission: [],
      pro: true,
    },
    {
      title: 'Quản lý lưu trú',
      key: 'items',
      url: ['/quan-ly-luu-tru', '/quan-ly-luu-tru/them-moi', '/quan-ly-luu-tru/:id/chi-tiet'],
      icon: 'icon icon-laptop',
      permission: [],
      pro: true,
    },
    {
      title: 'Quản lý người dùng',
      key: 'goal',
      url: [
        '/quan-ly-nguoi-dung',
        '/quan-ly-nguoi-dung/them-moi',
        '/quan-ly-nguoi-dung/:id/chi-tiet',
      ],
      icon: 'icon icon-profits',
      permission: [],
      pro: true,
    },
    {
      title: 'QL loại lưu trú',
      key: 'payment',
      url: [
        '/quan-ly-loai-luu-tru',
        '/quan-ly-loai-luu-tru/them-moi',
        '/quan-ly-loai-luu-tru/:id/chi-tiet',
      ],
      icon: 'icon icon-curriculum',
      permission: [],
      pro: true,
    },
    {
      title: 'QL loại gói dịch vụ',
      key: 'diploma',
      url: [
        '/quan-ly-goi-dich-vu',
        '/quan-ly-goi-dich-vu/them-moi',
        '/quan-ly-goi-dich-vu/:id/chi-tiet',
      ],
      icon: 'icon icon-curriculum',
      permission: [],
      pro: true,
    },
    {
      title: 'QL loại phòng',
      key: 'typeRooms',
      url: [
        '/quan-ly-loai-phong',
        '/quan-ly-loai-phong/them-moi',
        '/quan-ly-loai-phong/:id/chi-tiet',
      ],
      icon: 'icon icon-curriculum',
      permission: [],
      pro: true,
    },
    {
      title: 'QL tiện ích',
      key: 'utilities',
      url: ['/quan-ly-tien-ich', '/quan-ly-tien-ich/them-moi', '/quan-ly-tien-ich/:id/chi-tiet'],
      icon: 'icon icon-curriculum',
      permission: [],
      pro: true,
    },
    {
      title: 'QL tiện nghi',
      key: 'convenients',
      url: ['/quan-ly-tien-nghi', '/quan-ly-tien-nghi/them-moi', '/quan-ly-tien-nghi/:id/chi-tiet'],
      icon: 'icon icon-curriculum',
      permission: [],
      pro: true,
    },
    {
      title: 'QL tùy chọn bổ sung',
      key: 'additional-prices',
      url: [
        '/quan-ly-tuy-chon-bo-sung',
        '/quan-ly-tuy-chon-bo-sung/them-moi',
        '/quan-ly-tuy-chon-bo-sung/:id/chi-tiet',
      ],
      icon: 'icon icon-curriculum',
      permission: [],
      pro: true,
    },
    {
      title: 'QL quốc gia',
      key: 'nations',
      url: ['/quan-ly-quoc-gia', '/quan-ly-quoc-gia/them-moi', '/quan-ly-quoc-gia/:id/chi-tiet'],
      icon: 'icon icon-curriculum',
      permission: [],
      pro: true,
    },
    {
      title: 'QL thành phố',
      key: 'cities',
      url: ['/quan-ly-thanh-pho', '/quan-ly-thanh-pho/them-moi', '/quan-ly-thanh-pho/:id/chi-tiet'],
      icon: 'icon icon-curriculum',
      permission: [],
      pro: true,
    },
    {
      title: 'QL gợi ý từ Xedich',
      key: 'suggest',
      url: ['/tranh-chap'],
      icon: 'icon icon-curriculum',
      permission: [],
      pro: true,
    },
    {
      title: 'QL trang chủ',
      key: 'home',
      url: ['/quan-ly-trang-chu', '/quan-ly-trang-chu/them-moi', '/quan-ly-trang-chu/:id/chi-tiet'],
      icon: 'icon icon-monitor',
      permission: [],
      pro: true,
    },
    {
      title: 'QL phí',
      key: 'price',
      url: ['/tranh-chap'],
      icon: 'icon icon-coin',
      permission: [],
      pro: true,
    },
    {
      title: 'QL ngôn ngữ',
      key: 'language',
      url: ['/tranh-chap'],
      icon: 'icon icon-planet-earth',
      permission: [],
      pro: true,
    },
    {
      title: 'QL chính sách hủy',
      key: 'cancelPolicies',
      url: [
        'quan-ly-chinh-sach-huy',
        'quan-ly-chinh-sach-huy/them-moi',
        'quan-ly-chinh-sach-huy/:id/chi-tiet',
      ],
      icon: 'icon icon-curriculum',
      permission: [],
      pro: true,
    },
  ];
}
