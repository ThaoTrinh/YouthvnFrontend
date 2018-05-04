// define all constants here
export const SUCCESS_CODE = "successful";
export const FAIL_CODE = "failed";
export const PAGE_SIZE = 6;


export const listOfCategories = ["Nghệ thuật", "Truyện tranh", "Đồ thủ công", "Nhảy", "Thiết kế" ,"Thời trang", "Phim ảnh và Video", 
													"Thức ăn", "Trò chơi", "Báo chí", "Âm nhạc", "Nhiếp ảnh", "Xuất bản", "Công nghệ", "Sân khấu"]

export const subCategories = [
	{
		parents: "Nghệ thuật",
		content: "Digital Art"
	},
	{
		parents: "Nghệ thuật",
		content: "Tranh"
	},
	{
		parents: "Nghệ thuật",
		content: "Public Art"
	},
	{
		parents: "Nghệ thuật",
		content: "Điêu khắc"
	},
	{
		parents: "Nghệ thuật",
		content: "Video Art"
	},
	{
		parents: "Truyện tranh",
		content: "Tuyển tập các truyện"
	},
	{
		parents: "Truyện tranh",
		content: "Truyện tranh"
	},
	{
		parents: "Truyện tranh",
		content: "Truyện tranh trên web"
	},
	{
		parents: "Đồ thủ công",
		content: "Nến"
	},
	{
		parents: "Đồ thủ công",
		content: "Thêu"
	},
	{
		parents: "Đồ thủ công",
		content: "Đồ tự làm"
	},
	{
		parents: "Đồ thủ công",
		content: "Ly"
	},
	{
		parents: "Đồ thủ công",
		content: "Đan"
	},
	{
		parents: "Đồ thủ công",
		content: "In"
	},
	{
		parents: "Đồ thủ công",
		content: "May"
	},
	{
		parents: "Đồ thủ công",
		content: "Dụng cụ học đường"
	},
	{
		parents: "Đồ thủ công",
		content: "Độn"
	},
	{
		parents: "Đồ thủ công",
		content: "Dệt"
	},
	{
		parents: "Đồ thủ công",
		content: "Đồ gỗ"
	},
	{
		parents: "Đồ thủ công",
		content: "Đồ gốm"
	},
	{
		parents: "Nhảy",
		content: "Biểu diễn"
	},
	{
		parents: "Nhảy",
		content: "Phòng tập"
	},
	{
		parents: "Thiết kế",
		content: "Kiến trúc"
	},
	{
		parents: "Thiết kế",
		content: "Đồ họa"
	},
	{
		parents: "Thiết kế",
		content: "Sản phẩm"
	},
	{
		parents: "Thiết kế",
		content: "Giao diện"
	},
	{
		parents: "Thiết kế",
		content: "Kiểu chữ"
	},
	{
		parents: "Thời trang",
		content: "Phụ kiện"
	},
	{
		parents: "Thời trang",
		content: "Phụ kiện"
	},
	{
		parents: "Thời trang",
		content: "Quần áo"
	},
	{
		parents: "Thời trang",
		content: "Trẻ em"
	},
	{
		parents: "Thời trang",
		content: "Giày dép"
	},
	{
		parents: "Thời trang",
		content: "Trang sức"
	},
	{
		parents: "Thời trang",
		content: "Thú nuôi"
	},
	{
		parents: "Phim ảnh và Video",
		content: "Hành động"
	},
	{
		parents: "Phim ảnh và Video",
		content: "Hoạt hình"
	},
	{
		parents: "Phim ảnh và Video",
		content: "Hài hước"
	},
	{
		parents: "Phim ảnh và Video",
		content: "Tài liệu"
	},
	{
		parents: "Phim ảnh và Video",
		content: "Tình cảm"
	},
	{
		parents: "Phim ảnh và Video",
		content: "Gia đình"
	},
	{
		parents: "Phim ảnh và Video",
		content: "Thần thoại"
	},
	{
		parents: "Phim ảnh và Video",
		content: "Viễn tưởng"
	},
	{
		parents: "Phim ảnh và Video",
		content: "Kinh dị"
	},
	{
		parents: "Phim ảnh và Video",
		content: "Ngắn"
	},
	{
		parents: "Phim ảnh và Video",
		content: "Ly kỳ"
	},
	{
		parents: "Phim ảnh và Video",
		content: "Video ca nhạc"
	},
	{
		parents: "Phim ảnh và Video",
		content: "Địa điểm"
	},
	{
		parents: "Thức ăn",
		content: "Sách dạy nấu ăn"
	},
	{
		parents: "Thức ăn",
		content: "Đồ ăn"
	},
	{
		parents: "Thức ăn",
		content: "Thức uống"
	},
	{
		parents: "Thức ăn",
		content: "Sự kiện"
	},
	{
		parents: "Thức ăn",
		content: "Trang trại"
	},
	{
		parents: "Thức ăn",
		content: "Nhà hàng"
	},
	{
		parents: "Thức ăn",
		content: "Quán"
	},
	{
		parents: "Thức ăn",
		content: "Đồ chay"
	},
	{
		parents: "Trò chơi",
		content: "Phần cứng máy tính"
	},
	{
		parents: "Trò chơi",
		content: "Game online"
	},
	{
		parents: "Trò chơi",
		content: "Game di động"
	},
	{
		parents: "Trò chơi",
		content: "Game máy tính"
	},
	{
		parents: "Trò chơi",
		content: "Xếp hình"
	},
	{
		parents: "Trò chơi",
		content: "Board game"
	},
	{
		parents: "Trò chơi",
		content: "Cards game"
	},
	{
		parents: "Báo chí",
		content: "Ảnh"
	},
	{
		parents: "Báo chí",
		content: "Báo giấy"
	},
	{
		parents: "Báo chí",
		content: "Video"
	},
	{
		parents: "Báo chí",
		content: "Web"
	},
	{
		parents: "Âm nhạc",
		content: "Pop"
	},
	{
		parents: "Âm nhạc",
		content: "Rock"
	},
	{
		parents: "Âm nhạc",
		content: "EDM"
	},
	{
		parents: "Âm nhạc",
		content: "Trữ tình"
	},
	{
		parents: "Âm nhạc",
		content: "Hip-Hop"
	},
	{
		parents: "Nhiếp ảnh",
		content: "Động vật"
	},
	{
		parents: "Nhiếp ảnh",
		content: "Thiên nhiên"
	},
	{
		parents: "Nhiếp ảnh",
		content: "Con người"
	},
	{
		parents: "Nhiếp ảnh",
		content: "Sách ảnh"
	},
	{
		parents: "Nhiếp ảnh",
		content: "Địa điểm"
	},
	{
		parents: "Xuất bản",
		content: "Học tập"
	},
	{
		parents: "Xuất bản",
		content: "Tuyển tập truyện ngắn"
	},
	{
		parents: "Xuất bản",
		content: "Sách nghệ thuật"
	},
	{
		parents: "Xuất bản",
		content: "Lịch"
	},
	{
		parents: "Xuất bản",
		content: "Sách trẻ em"
	},
	{
		parents: "Xuất bản",
		content: "Truyện hài"
	},
	{
		parents: "Xuất bản",
		content: "Tiểu thuyết"
	},
	{
		parents: "Xuất bản",
		content: "Báo"
	},
	{
		parents: "Xuất bản",
		content: "Tạp chí"
	},
	{
		parents: "Xuất bản",
		content: "Thơ"
	},
	{
		parents: "Xuất bản",
		content: "Truyện dịch"
	},
	{
		parents: "Xuất bản",
		content: "Địa điểm"
	},
	{
		parents: "Công nghệ",
		content: "In 3D"
	},
	{
		parents: "Công nghệ",
		content: "Ứng dụng"
	},
	{
		parents: "Công nghệ",
		content: "Phần cứng"
	},
	{
		parents: "Công nghệ",
		content: "Phần mềm"
	},
	{
		parents: "Công nghệ",
		content: "Thiết bị"
	},
	{
		parents: "Công nghệ",
		content: "Web"
	},
	{
		parents: "Công nghệ",
		content: "Âm thanh"
	},
	{
		parents: "Công nghệ",
		content: "Thiết bị di động"
	},
	{
		parents: "Công nghệ",
		content: "Địa điểm"
	},
	{
		parents: "Sân khấu",
		content: "Hài kịch"
	},
	{
		parents: "Sân khấu",
		content: "Lễ hội"
	},
	{
		parents: "Sân khấu",
		content: "Âm nhạc"
	},
	{
		parents: "Sân khấu",
		content: "Địa điểm"
	},
	
	
]

// User CV item type
export const ITEM_TYPE = {
	EDUCATION: 1,
	EXPERIENCE: 2,
	PROJECT: 3,
	ACTIVITY: 4,
	AWARD: 5,
	COURSE: 6,
	LANGUAGE: 7,
	PUBLICATION: 8,
	SKILL: 9,
	BASICINFO: 10,
	CERTIFICATE: 11,
	MIDDLEMAN: 12 ,
	EVENT : 13
}

// month
export const monthOptions = [
	{ value: "01", label: "01" },
	{ value: "02", label: "02" },
	{ value: "03", label: "03" },
	{ value: "04", label: "04" },
	{ value: "05", label: "05" },
	{ value: "06", label: "06" },
	{ value: "07", label: "07" },
	{ value: "08", label: "08" },
	{ value: "09", label: "09" },
	{ value: "10", label: "10" },
	{ value: "11", label: "11" },
	{ value: "12", label: "12" }
]

export const yearOptions = () => {
	var year = Number(new Date().getFullYear());
	var arr = [];
	for (var i = year; i > year - 100; i--) {
		arr.push({ value: i.toString(), label: i.toString() });
	}
	return arr;
}

export const educationLevel = ["Không yêu cầu", "Trung cấp", "Cao đẳng", "Đại học", "Sau đại học"];

export const jobTypeArr = ["Toàn thời gian", "Bán thời gian", "Thực tập", "Thời vụ"];

export const languageArr = ["Tiếng Anh", "Tiếng Việt", "Tiếng Nhật", "Tiếng Đức", "Tiếng Tây Ban Nha", "Tiếng Trung"];

export const genderArr = ["Không yêu cầu", "Nam", "Nữ"];

export const organizationArr = ["Trường", "Khác"];

export const INVITATION_TYPES = {
  EMPLOYEE: 'employee',
  RECRUITMENT: 'recruitment'
}
export const ACCEPTED_TYPES = {
  UNKNOWN: 'unknown',
  ACCEPTED: 'accepted',
	REJECTED: 'rejected',
	CANCELLED: 'cancelled'
}

export const NOT_APPLIED = 'Chưa ứng tuyển';
export const NOT_INVITED = 'Chưa gửi lời mời'

export const INVITATION_STATUS = {
  [NOT_INVITED]: NOT_INVITED,
  'accepted': 'Đã ứng tuyển',
  'rejected': 'Đã từ chối lời mời',
  'unknown': 'Đang chờ trả lời'
}

export const STATUS = {
	[NOT_APPLIED]: NOT_APPLIED,
	'-1': 'Chưa quyết định',
	'0': 'Đã từ chối',
	'1': 'Đã trúng tuyển' 
  }