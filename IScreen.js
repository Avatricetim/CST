var IScreen = JSON.parse($response.body);

IScreen = {
  "status" : 0,
  "data" : {
    "FeedBanner" : "3333",
    "IsandBannerAd" : 0,
    "noAds" : 1,
    "lang" : "zh",
    "review_pop_interval" : 300,
    "country" : "cn",
    "lockscreen_noVip" : "0,1",
    "SplashInter" : 300,
    "pic_lock_count" : 50,
    "showOurApp" : 1,
    "main_pop_ad_interval" : 0,
    "launchAd" : 0,
    "FeedAd" : 0,
    "BannerAd" : 0,
    "vipPopupType" : 3,
    "ai_painting" : 1,
    "ai_painting_wp" : 1,
    "activityUpdateTime" : 1687959242,
    "rewardAd" : 0,
    "Hudong_Interval" : 900,
    "ThemeFeedAd" : 4,
    "showRing" : 1
  },
  "ab" : 0
};

$done({body : JSON.stringify(IScreen)});
