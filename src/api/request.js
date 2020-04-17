import { axiosInstance } from './config';

// 获取轮播banner
export const getBannerRequest = () => {
  return axiosInstance.get(`/banner?type=1`);
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(['banner_1', 'banner_2', 'banner_3', 'banner_4'])
  //   }, 1000);
  // })
}

// 获取推荐列表
export const getRecommendListRequest = () => {
  return axiosInstance.get('/personalized');
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(['recommendList_1', 'recommendList_2', 'recommendList_3', 'recommendList_4'])
  //   }, 1000);
  // })
}