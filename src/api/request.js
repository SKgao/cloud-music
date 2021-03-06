import { axiosInstance } from './config';

// 获取轮播banner
export const getBannerRequest = () => {
  return axiosInstance.get(`/banner?type=1`);
}

// 获取推荐列表
export const getRecommendListRequest = () => {
  return axiosInstance.get('/personalized');
}

// 获取热门歌手列表
export const getHotSingerListRequest = (count) => {
  return axiosInstance.get(`/top/artists?offset=${count}`);
}

// 获取对应类别歌手列表
export const getSingerListRequest= (category, alpha, count) => {
  return axiosInstance.get(
    `/artist/list?cat=${category}&initial=${alpha.toLowerCase()}&offset=${count}`);
}

// 获取排行榜列表
export const getRankListRequest = () => {
  return axiosInstance.get(`/toplist/detail`);
};

// 获取歌手详情页
export const getAlbumDetailRequest = id => {
  return axiosInstance.get(`/playlist/detail?id=${id}`);
};