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
    url: /\/api\/front\/logout/,
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
              league_id: 0,
              league_name: '马来西亚',
              league_remark: '超高赔率，超多机会'
            },
            {
              league_id: 1,
              league_name: '澳大利亚',
              league_remark: '超高赔率，超多机会'
            },
            {
              league_id: 2,
              league_name: '香港',
              league_remark: '超高赔率，超多机会'
            },
            {
              league_id: 3,
              league_name: '新加坡',
              league_remark: '超高赔率，超多机会'
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
        "msg": "查询成功",
        "data": {
          "race_info": {
            "race_id": 10,
            "league_id": 2,
            "created_time": "2018-12-15T18:06:33.000Z",
            "updated_time": "2018-12-15T18:06:33.000Z",
            "race_time": "2018-12-11T16:08:33.000Z",
            "race_name": "马来西亚_比赛_2018-12-16",
            "race_status": 3,
            "all_bet": 0,
            "all_win": 0,
            "player_win": 0,
            "head_odds": 150,
            "foot_odds": 85,
            "horseInfo": [{
              "horse_id": 6,
              "horse_name": "222",
              "head_limit": 95,
              "foot_limit": 95,
              "horse_status": 0,
              "race_id": 10,
              "horse_bet_status": null,
              "horse_score": 1
            }, {
              "horse_id": 7,
              "horse_name": "111",
              "head_limit": 95,
              "foot_limit": 95,
              "horse_status": 0,
              "race_id": 10,
              "horse_bet_status": null,
              "horse_score": 0
            }, {
              "horse_id": 8,
              "horse_name": "string",
              "head_limit": 95,
              "foot_limit": 95,
              "horse_status": 0,
              "race_id": 11,
              "horse_bet_status": null,
              "horse_score": 0
            }, {
              "horse_id": 9,
              "horse_name": "111",
              "head_limit": 95,
              "foot_limit": 95,
              "horse_status": 0,
              "race_id": 11,
              "horse_bet_status": null,
              "horse_score": 0
            }, {
              "horse_id": 10,
              "horse_name": "string",
              "head_limit": 95,
              "foot_limit": 95,
              "horse_status": 0,
              "race_id": 12,
              "horse_bet_status": null,
              "horse_score": 0
            }, {
              "horse_id": 11,
              "horse_name": "111",
              "head_limit": 95,
              "foot_limit": 95,
              "horse_status": 0,
              "race_id": 12,
              "horse_bet_status": null,
              "horse_score": 0
            }, {
              "horse_id": 12,
              "horse_name": "string",
              "head_limit": 95,
              "foot_limit": 95,
              "horse_status": 0,
              "race_id": 13,
              "horse_bet_status": null,
              "horse_score": 0
            }, {
              "horse_id": 13,
              "horse_name": "111",
              "head_limit": 95,
              "foot_limit": 95,
              "horse_status": 0,
              "race_id": 13,
              "horse_bet_status": null,
              "horse_score": 0
            }]
          }
        }
      }
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
