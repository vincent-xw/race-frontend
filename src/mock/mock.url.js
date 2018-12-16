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
    url: /\/api\/front\/resetpwd/,
    callback: (url, type, body) => {
      return {
        status: 0,
        msg: '修改密码成功'
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
              race_time: '1544769093807',
            },
            {
              race_id: 1,
              raceName: '哈哈1',
              race_time: '1544769093807',
            },
            {
              race_id: 2,
              raceName: '哈哈2',
              race_time: '1544769093807',
            },
            {
              race_id: 3,
              raceName: '哈哈3',
              race_time: '1544769093807',
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
                "horse_name": "a",
                "head_limit": 95,
                "foot_limit": 95
              },
              {
                "horse_id": "1002",
                "horse_name": "b",
                "head_limit": 95,
                "foot_limit": 95
              },
              {
                "horse_id": "1003",
                "horse_name": "c",
                "head_limit": 95,
                "foot_limit": 95
              },
              {
                "horse_id": "1004",
                "horse_name": "d",
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
    url: /\/api\/front\/race\/bet$/,
    callback: (url, type, body) => {
      return {
        "status": 0,
        "msg": ""
      };
    }
  },
  {
      url: /\/api\/front\/race\/bet\/detail$/,
    callback: (url, type, body) => {
      return {
        "status": 0,
        "msg": "",
        "data": {
          // todo league_name race_name race_status 目前接口文档没有
          "bet_detail": {
            "bet_id": "1",
            "league_id": "1",
            "league_name": "1",
            "race_time": 1544544513119,
            "bet_time": 1544544513119,
            "horse_info": [
              {
                "horse_id": "1001",
                "horse_name":"string",
                "bet_head": 10,
                "bet_foot": 20,
                "player_win": 1000,
                "horse_score": 1,
              },
              {
                "horse_id": "1002",
                "horse_name":"string2",
                "bet_head": 20,
                "bet_foot": 20,
                "player_win": 1000,
                "horse_score": 3,
              },{
                "horse_id": "1003",
                "horse_name":"string3",
                "bet_head": 30,
                "bet_foot": 20,
                "player_win": 1000,
                "horse_score": 2,
              }
            ]
          }
        }
      };
    }
  },
  {
    url: /\/api\/front\/race\/bet\/history$/,
    callback: (url, type, body) => {
      return {
        "status": 0,
        "msg": "",
        "data": {
          "bet_list": [
            {
              "bet_id": "1001",
              "race_name": "马来西亚-2018年12月13日-比赛001",
              "bet_time":1544544513119,
              "lottery_time": 1544544513119
            },
            {
              "bet_id": "1002",
              "race_name": "马来西亚-2018年12月13日-比赛002",
              "bet_time":1544544513119,
              "lottery_time": 1544544513119
            },
            {
              "bet_id": "1001",
              "race_name": "马来西亚-2018年12月13日-比赛003",
              "bet_time":1544544513119,
              "lottery_time": 1544544513119
            },
          ]
        }
      };
    }
  },
];
