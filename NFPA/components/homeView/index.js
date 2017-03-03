'use strict';

app.homeView = kendo.observable({
    onShow: function () {

        var jsonUrlToLoad = localStorage['apiserver'] + 'Asset/?API_Key=' + localStorage['apikey'] + '&EncCId=' + encodeURIComponent(localStorage['enccid']) + '&Mode=CampaignAssetsbyCampaign&campaign_key=' + localStorage['campaignkey'];
        var latestDataSource = new kendo.data.DataSource({
            transport: {
                read: {
                    url: jsonUrlToLoad,
                    dataType: 'jsonp'
                }
            },
            schema: {
                data: function (response) {
                    if (response.count == 0) {
                        //$('.no-sessions').show();
                        //$('#btnFilter').hide();
                        return [];
                    }
                    else {
                        $.each(response.items, function (j, ar) {
                            console.log(response.items[j].name)
                            //    response.items[j].remianingstyle = '';
                            //    response.items[j].remianing = response.items[j].limit - response.items[j].used;
                            //    if (response.items[j].remianing < 1 && response.items[j].limit > 0) { response.items[j].remianingstyle = 'sold-out'; response.items[j].remianing = 0; };
                        });
                        //$('#btnFilter').show();
                    }
                    return response.items;
                }
            },
            requestEnd: function () {
            }
        });

        var listViewWrapper = $('#latest-asset-listview');
        if (listViewWrapper.data('kendoMobileListView')) {
            listViewWrapper.data('kendoMobileListView').setDataSource(latestDataSource);
        }
        else {
            listViewWrapper.kendoMobileListView({
                dataSource: latestDataSource,
                template: $('#asset-template').html()
            });
        }
    },
    afterShow: function () { },
    onCategory01: function () {
        app.mobileApp.navigate('components/SubCategoryView/view.html?c=NFPA NEWs&s=');
    },
    onCategory02: function () {
        app.mobileApp.navigate('components/SubCategoryView/view.html?c=Health and Safety&s=');
    },
    onCategory03: function () {
        app.mobileApp.navigate('components/SubCategoryView/view.html?c=Your Voice Matters&s=');
    },
    onCategory04: function () {
        app.mobileApp.navigate('components/SubCategoryView/view.html?c=Emergency Services&s=');
    },
    onCategory05: function () {
        app.mobileApp.navigate('components/SubCategoryView/view.html?c=Future of Firefighting&s=');
    },
    onCategory06: function () {
        app.mobileApp.navigate('components/SubCategoryView/view.html?c=Emergency Preparedness&s=');
    }
});
app.localization.registerView('homeView');

// START_CUSTOM_CODE_homeView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_homeView