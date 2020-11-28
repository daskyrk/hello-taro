import Taro from "@tarojs/taro";
import config from '../_config';
import mockData from "../mock";
import { createFlatStore } from "../cube";

const defaultData = {
  pages: {

  } as Obj
}
const siteStore = createFlatStore({
  name: 'site',
  state: defaultData as SITE.FullData,
  effects: {
    async getFullData({ update }) {
      let content = defaultData as SITE.FullData;
      // const res = await Taro.request({
      //   url: config.fileUrl
      // })
      // try {
      //   content = JSON.parse(res.data.data);
      //   update(content);
      //   console.log('content:', content);
      // } catch (error) {
      //   console.log('get data error:', error);
      // }
      content = await Promise.resolve(mockData);
      update(content);
    },
    async setFullData(_, data: SITE.FullData) {
      const str = JSON.stringify(data);
      await Taro.request({
        method: 'POST',
        url: config.fileUrl,
        data: {
          name: "Taro Data",
          _id: config.fileId,
          data: str
        },
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          console.log('succ', res)
        }
      });
    },
  },
  reducers: {
    setPageData(state, page: keyof ValueOf<SITE.FullData, 'pages'>, data: any) {
      const match = state.pages[page];
      if (!match) {
        console.log(`save error, page: ${page} not exist in data`);
      }
      state.pages[page] = data;
    },
    getPageData(state, page: keyof ValueOf<SITE.FullData, 'pages'>) {
      return state.pages[page] || {}
    }
  }
})

siteStore.getFullData();
// siteStore.setFullData(mockData);

export const useData = siteStore.useStore;
export const usePageData = siteStore.getPageData;

export default siteStore;
