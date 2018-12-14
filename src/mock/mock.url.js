/**
 * @file mock.url
 * @author jiaxuewen
 * @description mockurl配置文件，需要被mock的接口均可以再此进行配置，格式参照如下
 * @param {url} 需要被mock的URL，可以使用正则可以使用字符串匹配，本项目使用字符串匹配
 * @param {callback} 当URL被匹配到的时候调用的callback，传三个参数，url,type,body分别表示当前模块的URL地址，请求类型，返回值类型及请求所带的body值，具体参考https://github.com/nuysoft/Mock/wiki/Mock.mock()
 */
export default [
  {
    url: /\/api\/front\/index/,
    callback: (url, type, body) => {
      return {
        status: 0,
        data: {
          name: 'jiaxuewen',
          age: 26
        }
      };
    }
  },
  {
    url: /\/api\/front\/submit/,
    callback: (url, type, body) => {
      console.log(url);
    }
  },
  {
    url: /\/api\/front\/login/,
    callback: (url, type, body) => {
      return {
        status: 0,
        msg: '登陆成功'
      };
    }
  },
  {
    url: /\/api\/front\/league\/list/,
    callback: (url, type, body) => {
      return {
        "status": 0,
        "msg": "",
        "data": {
          "league_list": [
            {
              id: 0,
              name: '马来西亚',
              remark: '超高赔率，超多机会'
            },
            {
              id: 1,
              name: '澳大利亚',
              remark: '超高赔率，超多机会'
            },
            {
              id: 2,
              name: '香港',
              remark: '超高赔率，超多机会'
            },
            {
              id: 3,
              name: '新加坡',
              remark: '超高赔率，超多机会'
            }
          ]
        }

      };
    }
  },
  {
    url: /\/api\/front\/race\/list/,
    callback: (url, type, body) => {
      return {
        "status": 0,
        "msg": "",
        "data": {
          "race_list": [
            {
              race_id: 0,
              raceName: '哈哈',
              race_time: '123',
            },
            {
              race_id: 1,
              raceName: '哈哈1',
              race_time: '124',
            },
            {
              race_id: 2,
              raceName: '哈哈2',
              race_time: '125',
            },
            {
              race_id: 3,
              raceName: '哈哈3',
              race_time: '126',
            },
          ]
        }
      };
    }
  },
  {
    url: /\/api\/front\/race\/info/,
    callback: (url, type, body) => {
      return {
        "status": 0,
        "msg": "",
        "data": {
          "race_info": {
            "league_id": "1",
            "race_time": 1544544513119,
            "horse_info": [
              {
                "horse_id": "1001",
                "horse_name": "string",
                "head_limit": 95,
                "foot_limit": 95
              }
            ]
          }
        }
      };
    }
  },
  {
    url: /\/api\/front\/race\/bet/,
    callback: (url, type, body) => {
      return {
        "status": 0,
        "msg": ""
      };
    }
  },
];
