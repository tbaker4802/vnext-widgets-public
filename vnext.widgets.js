"use strict";angular.module("vnext.widgets.constants",[]).constant("widgets",{"product-list-widget":{id:"product-list-widget",directiveName:"product-list-widget",title:"Product List",category:"Content",settings:[{id:"title",label:"Grid Title",type:"text","default":"Products"},{id:"useParentContext",label:"Use Parent Context",type:"toggle","default":!0},{id:"categoryId",label:"Category",type:"categoryId","default":""},{id:"productIds",label:"Products",type:"productId-multi","default":[]},{id:"numberOfItems",label:"Number of Products",type:"dropdown",values:[1,2,3,4,5,6,7,8,9,10],"default":4},{id:"numberOfColumns",label:"Number of Columns",type:"dropdown",values:[1,2,3,4,5,6],"default":4},{id:"displayType",label:"Display as",type:"complex-dropdown",values:[{display:"Grid",value:"grid"},{display:"List",value:"list"}],"default":"grid"},{id:"sortBy",label:"Sort By",type:"complex-dropdown",values:[{display:"Price: Highest to Lowest",value:"price+desc"},{display:"Price: Lowest to Highest",value:"price+asc"},{display:"Name: Ascending",value:"name+asc"},{display:"Name: Descending",value:"name+desc"},{display:"Newest",value:"lastUpdated+desc"}],"default":"lastUpdated+desc"},{id:"showProductDescription",label:"Show Descriptions",type:"toggle","default":!0},{id:"displayPaging",label:"Display Paging",type:"toggle","default":!1},{id:"showAddToCart",label:"Show Add to Cart",type:"toggle","default":!1},{id:"enableSort",label:"Display Sort",type:"toggle","default":!1}]},"navigation-widget":{id:"navigation-widget",directiveName:"navigation-widget",title:"Navigation Menu",category:"Navigation",settings:[{id:"menuId",label:"Menu",type:"menu-resource","default":"0"}]},"image-widget":{id:"image-widget",directiveName:"image-widget",title:"Image",category:"Content",settings:[{id:"src",label:"Image",type:"image-single","default":{fullUri:"https://www.google.com/images/srpr/logo11w.png"}},{id:"alt",label:"Alt Tag",type:"text","default":"Image"},{id:"href",label:"Link",type:"text","default":"#"}]},"product-widget":{id:"product-widget",directiveName:"product-widget",title:"Product",category:"Content",settings:[{id:"useParentContext",label:"Use Parent Context",type:"toggle","default":!0},{id:"productId",label:"Product",contextSensitive:["product"],type:"productId","default":"55db4ab24d7132045ce084c1"}]},"html-widget":{id:"html-widget",directiveName:"html-widget",title:"HTML",category:"Content",settings:[{id:"html",label:"HTML",type:"html","default":"My <b>HTML</b> content"}]},"video-widget":{id:"video-widget",directiveName:"video-widget",title:"Video",category:"Media",settings:[{id:"videoUrl",label:"Video Url",type:"text","default":"https://www.youtube.com/watch?v=xI4W6c1QjIw"},{id:"autoplay",label:"Autoplay",type:"toggle","default":!1}]},"social-widget":{id:"social-widget",directiveName:"social-widget",title:"Social",category:"Content",settings:[{id:"newTab",label:"Open links in new tab",type:"toggle","default":!0}]},"carousel-widget":{id:"carousel-widget",directiveName:"carousel-widget",title:"Carousel",category:"Content",settings:[{id:"dots",label:"Dots",type:"toggle","default":!0},{id:"arrows",label:"Arrows",type:"toggle","default":!1},{id:"autoplay",label:"Autoplay",type:"toggle","default":!0},{id:"speed",label:"Time per slide (ms)",type:"dropdown",values:[2e3,4e3,6e3],"default":4e3},{id:"animation",label:"Transition Effect",type:"dropdown",values:["Slide","Fade"],"default":"Slide"},{id:"slides",label:"Slides",type:"image-slides","default":[{fullUri:"http://res.cloudinary.com/dyx4yhvoq/image/upload/v1441216255/1/cr3v5gfmkqr5f4sg9018.jpg",imageAlt:"Image",imageLink:"#"},{fullUri:"http://res.cloudinary.com/dyx4yhvoq/image/upload/v1441216255/1/cr3v5gfmkqr5f4sg9018.jpg",imageAlt:"Image",imageLink:"#"},{fullUri:"http://res.cloudinary.com/dyx4yhvoq/image/upload/v1441216255/1/cr3v5gfmkqr5f4sg9018.jpg",imageAlt:"Image",imageLink:"#"}]}]}}),angular.module("vnext.widgets",["ngAnimate","ngCookies","ngTouch","ngSanitize","ui.bootstrap","vnext.components","vnext.widgets.templates","vNext","videosharing-embed","vnext.widgets.constants","vnextThemeAdminConnector"]),angular.module("vnext.widgets").service("applicationFunctions",["lodash","$rootScope","iframeService","$http",function(e,t,n,i){var o={};return o.setCustomWidgetDefinitions=function(e){e&&(this.customWidgetDefinitions=e)},o.generateSettings=function(e){var t={};return e.map(function(e){t[e.id]=e["default"]}),{settings:t}},o.findPageByName=function(t){return e.find(this.pages,function(e){return e.name===t})},o.findWidgetById=function(e){return this.findWidgetDataById(e)&&this.findWidgetDataById(e).widget?this.findWidgetDataById(e).widget:void 0},o.get=function(){return this},o["export"]=function(){i.post("/widget",this).then(function(e){console.log(e)},function(e){console.error(e)}),console.log(this)},o}]),angular.module("vnext.widgets").service("applicationIframe",["$http","lodash","$rootScope","iframeService","applicationFunctions",function(e,t,n){var i={};return i.setApplication=function(e){n.$on("iframeMessageReceived",function(t,i){if("admin-widget-editor"===i.sender)switch(i.event){case"previewStoreInfoChanges":e.previewStoreInfoChanges(i.data);break;case"previewEditableChanges":e.previewEditableChanges(i.data);break;case"previewWidgetChanges":e.previewWidgetChanges(i.data.id,i.data.settings),n.$apply();break;case"highlightCategory":e.highlightCategory(i.data);break;case"highlightWidget":e.highlightWidget(i.data);break;case"highlightEditable":e.highlightEditable(i.data);break;case"highlightDirective":e.highlightDirective(i.data);break;case"unhighlightCategory":e.unhighlightCategory();break;case"unhighlightWidget":e.unhighlightWidget();break;case"unhighlightEditable":e.unhighlightEditable();break;case"unhighlightDirective":e.unhighlightDirective(i.data);break;case"unhighlightAll":e.unhighlightAll();break;case"saveChanges":e["export"]();break;case"disableStateChange":e.disableStateChange();break;case"enableStateChange":e.enableStateChange();break;case"scrollToTop":e.scrollToTop();break;case"requestWidgetSettingsMenu":e.getWidgetData(i.data).widget.getScope().showWidgetMenu()}else"admin-style-editor"===i.sender?"sendRawCss"===i.event?$('style[id="compiled-css"]').html(i.data):"sendCompiledLESS"===i.event&&($('<style id="compiled-styles">'+i.data+"</style>").appendTo("head"),e.styleEditorFirstpass===!0?($('link[href="/styles/main.css"]').remove(),e.styleEditorFirstpass=!1):$('style[id="compiled-styles"]').first().remove()):"admin"===i.sender&&("disableStateChange"===i.event?e.disableStateChange():"enableStateChange"===i.event&&e.enableStateChange())}),e.hoverClassName="vn-widget--hover",e.highlightWidget=function(t){var n=angular.element('[widget-id="widget'+t+'"]');n.addClass(e.hoverClassName),e.scrollTo(n)},e.highlightEditable=function(t){var n=angular.element('[editable-section][section-id="'+t+'"]');n.addClass(e.hoverClassName),e.scrollTo(n)},e.highlightCategory=function(t){e.unhighlightCategory();var t=angular.element('[theme-section][section-id="'+t+'"]');t.addClass(e.hoverClassName),e.scrollTo(t)},e.highlightDirective=function(t){var n=angular.element("["+t+"]");n.addClass(e.hoverClassName),e.scrollTo(n)},e.unhighlightEditable=function(){angular.element("[editable-section][section-id]").removeClass(e.hoverClassName)},e.unhighlightCategory=function(){angular.element("[theme-section]").removeClass(e.hoverClassName)},e.unhighlightWidget=function(){angular.element("[widget-id]").removeClass(e.hoverClassName)},e.unhighlightDirective=function(t){angular.element("["+t+"]").removeClass(e.hoverClassName)},e.unhighlightAll=function(){angular.element("."+e.hoverClassName).each(function(){angular.element(this).removeClass(e.hoverClassName)})},e.scrollToTop=function(){angular.element("html,body").animate({scrollTop:0},"slow")},e.scrollTo=function(e){e.offset()&&angular.element("html,body").animate({scrollTop:e.offset().top-50},"slow")},e.previewWidgetChanges=function(t,i){var o=e.findWidgetById(t);return o?(angular.extend(o.settings,i),o.reRender.run(),n.$apply(),o):void 0},e.previewEditableChanges=function(t){e.setSectionSettings(t),n.$emit("updateSections:"+t.id)},e.previewStoreInfoChanges=function(e){n.storeInfo=e,n.$apply()},e.setLabel=function(t,n){e.labels[t]=n},e.getLabel=function(t){return e.labels[t]},e.setImage=function(t,n){e.images[t]=n},e.getImage=function(t){return e.images[t]}},i}]),angular.module("vnext.widgets").constant("editMode",function(){return!1}).provider("application",["widgets",function(e){var t={},n=function(n,i,o,r,a,s,l,d,c){function g(){return this.id}function u(e,t,n,i){var o={product:{api:r},category:{api:a}},s={};for(var l in o)s[l]=e&&e[l]&&n?e[l].clone():o[l].api.chain(),t&&t[l]&&p(s[l],t[l],l,i);return s}function p(e,t,n){e&&t&&("resolve"===t.type||e.addFilter().key(t.key)[t.comparison](t.value))}function f(e,t){return e=e||"",t=t||"",function(i,r,a){var s=i.$new();s.settings=this.settings?this.settings:{},s.resolves=this.getPage().getResolves(),s.reRender=this.reRender,this.setContext(u(this.getParent().getContext(),this.context,this.settings?this.settings.useParentContext:!1,s)),s.vnController=this,this.setScope(s);var l=n(e+"<div "+this.directiveName+' settings="settings" resolves="resolves" re-render="reRender"></div>'+t)(s);return"undefined"!=typeof a?o(function(){angular.element('[widget-id="widget'+a+'"]').before(l)},0,!0):o(function(){r.append(l)},0,!0),{element:l,scope:s}}}function h(e){var t={};return e.map(function(e){t[e.id]=e["default"]}),{settings:t}}function m(e,t,n,i,o){angular.extend(this,e);var r,a;this.reRender={run:angular.noop},this.getContext=function(){return a},this.setContext=function(e){a=e},this.getPage=function(){return t},this.getResolves=function(){return this.getPage().getResolves()},this.setContext=function(e){a=e},this.getSection=function(){return n},this.getRow=function(){return i},this.getColumn=function(){return o},this.getParent=this.getColumn,this.setScope=function(e){r=e},this.getScope=function(){return r},this.id||(this.id=C.counters.widgetId++),this.getId=g,this.render=f('<widget class="vn-widget">',"</widget>")}function v(e,t,n,i){var o,r;this.getContext=function(){return r},this.setContext=function(e){r=e},this.getPage=function(){return t},this.getSection=function(){return n},this.getRow=function(){return i},this.getParent=this.getRow,this.setScope=function(e){o=e},this.getScope=function(){return o},this.widgets=[],this.getId=g,this.directiveName="vn-col",this.render=f(),this.createWidget=function(e,o){var r=new m(e,t,n,i,this);if(o){for(var a=0,s=this.widgets.length;s>a&&this.widgets[0].id!==o;a++);this.widgets.splice(a,0,r)}else this.widgets.push(r);return x.push(C.getWidgetData(r.id)),r},angular.extend(this,e),this.id||(this.id=C.counters.columnId++)}function w(e,t,n){var i,o;this.getContext=function(){return o},this.setContext=function(e){o=e},this.getPage=function(){return t},this.getSection=function(){return n},this.getParent=this.getSection,this.setScope=function(e){i=e},this.getScope=function(){return i},this.columns=[],this.getId=g,this.directiveName="vn-row",this.render=f(),this.createColumn=function(e){if(this.columns.length>=12)return!1;var i=new v(e,t,n,this);return this.columns.push(i),i},angular.extend(this,e),this.id||(this.id=C.counters.rowId++)}function y(e,t){var n,i;this.getContext=function(){return i},this.setContext=function(e){i=e},this.getPage=function(){return t},this.getParent=this.getPage,this.setScope=function(e){n=e},this.getScope=function(){return n},this.rows=[],this.getId=g,this.directiveName="vn-section",this.render=f(),this.createRow=function(e){var n=new w(e,t,this);return this.rows.push(n),n},angular.extend(this,e),this.id||(this.id=C.counters.sectionId++)}function b(e){var t,n,i;this.getContext=function(){return n},this.setContext=function(e){n=e},this.getResolves=function(){return i},this.setResolves=function(e){i=e},this.sections=[],this.name="",angular.extend(this,e),this.id||(this.id=C.counters.pageId++),this.getId=g,this.setScope=function(e){t=e,t.getContext=this.getContext},this.getScope=function(){return t},this.getContext=function(){return n},this.render=function(n){this.setContext(u(null,e.context,!1,t)),c.forEach(this.sections,function(e){var t=e.render(n,angular.element('[dropzone="'+e.name+'"]'));c.forEach(e.rows,function(e){var n=e.render(t.scope,t.element);c.forEach(e.columns,function(e){var t=e.render(n.scope,n.element);c.forEach(e.widgets,function(e){e.render(t.scope,t.element)})})})})},this.createSection=function(e){var t=new y(e,this);return this.sections.push(t),t}}var C={settings:{},labels:{},images:{},pages:[],editableSectionDefinitions:{},customWidgetDefinitions:{},editableSections:{},counters:{pageId:0,sectionId:0,rowId:0,columnId:0,widgetId:0}};angular.extend(C,l,d),l.setApplication(C);var x=[],S=[],I=!1;C.ready=function(e){I?e(C):S.push(e)},C.onReady=function(){c.forEach(S,function(e){e(C)})};var $=!0;return C.disableStateChange=function(){$=!1},C.enableStateChange=function(){$=!0},C.styleEditorFirstpass=!0,C.getWidgetDefinitions=function(){return c.merge(e,C.customWidgetDefinitions)},C.initTheme=function(e){i.$on("$stateChangeStart",function(e){$||e.preventDefault()}),i.$on("$stateChangeSuccess",function(e,t,n){s.sendMessageToAdmin("pageChange",{stateName:t,stateParams:n})}),s.listenToParentWindow(),C.setCustomWidgetDefinitions(e.customWidgetDefinitions),C.load(t),s.sendMessageToAdmin("angularInitialized",e),I=!0,C.onReady()},C.getWidgets=function(){return x},C.findWidgetDataById=function(e){return c.find(x,function(t){return t.widget.id===e})},C.getEditableWidgets=function(e){var t=x;if(e)var t=c.select(x,function(t){return t.widget.getPage().name==e});return t.map(function(e){return{title:e.widget.title,directiveName:e.widget.directiveName,id:e.widget.id,settings:e.widget.settings,context:e.widget.getPage().context}})},C.renderSection=function(e,t,n){n&&angular.extend(e,{resolves:C.findPageByName(n).getResolves()}),e.settings=C.editableSections[t].settings},C.setSectionSettings=function(e){angular.extend(C.editableSections[e.id].settings,e.settings),i.$apply()},C.createPage=function(e){var t=new b(e);return C.pages.push(t),t},C.load=function(e){angular.extend(C,angular.copy(e)),i.$broadcast("updateLabels"),i.$broadcast("updateImages"),i.$broadcast("updateSections");for(var t=0,n=C.pages.length;n>t;t++)for(var o=C.pages[t]=new b(C.pages[t]),r=0,a=C.pages[t].sections.length;a>r;r++)for(var s=C.pages[t].sections[r]=new y(C.pages[t].sections[r],o),l=0,d=C.pages[t].sections[r].rows.length;d>l;l++)for(var c=C.pages[t].sections[r].rows[l]=new w(C.pages[t].sections[r].rows[l],o,s),g=0,u=C.pages[t].sections[r].rows[l].columns.length;u>g;g++)for(var p=C.pages[t].sections[r].rows[l].columns[g]=new v(C.pages[t].sections[r].rows[l].columns[g],o,s,c),f=0,h=C.pages[t].sections[r].rows[l].columns[g].widgets.length;h>f;f++){var S=C.pages[t].sections[r].rows[l].columns[g].widgets[f]=new m(C.pages[t].sections[r].rows[l].columns[g].widgets[f],o,s,c,p);x.push({page:o.id,section:s.id,row:c.id,column:p.id,widget:S})}C.counters=e.counters},C.getWidgetData=function(e){for(var t=0,n=C.pages.length;n>t;t++)for(var i=0,o=C.pages[t].sections.length;o>i;i++)for(var r=0,a=C.pages[t].sections[i].rows.length;a>r;r++)for(var s=0,l=C.pages[t].sections[i].rows[r].columns.length;l>s;s++)for(var d=0,c=C.pages[t].sections[i].rows[r].columns[s].widgets.length;c>d;d++)if(C.pages[t].sections[i].rows[r].columns[s].widgets[d].id===e)return{page:C.pages[t].id,section:C.pages[t].sections[i].id,row:C.pages[t].sections[i].rows[r].id,column:C.pages[t].sections[i].rows[r].columns[s].id,widget:C.pages[t].sections[i].rows[r].columns[s].widgets[d]}},C.insert=function(e,t,n){var i={title:e.title,directiveName:e.directiveName,category:e.category,settings:h(e.settings).settings},o=new m(i);o.render(t,null,n),C["export"]()},C.deleteRow=function(e){for(var t=0,n=C.pages.length;n>t;t++)for(var i=0,o=C.pages[t].sections.length;o>i;i++)c.remove(C.pages[t].sections[i].rows,function(t){return t.id===e})},C.deleteColumn=function(e){for(var t=0,n=C.pages.length;n>t;t++)for(var i=0,o=C.pages[t].sections.length;o>i;i++)for(var r=0,a=C.pages[t].sections[i].rows.length;a>r;r++)c.remove(C.pages[t].sections[i].rows[r].columns,function(t){return t.id===e})},C.deleteWidget=function(e){var t=C.findWidgetDataById(e);t||(t=C.getWidgetData(e));var n=c.find(this.pages,function(e){return e.id===t.page}),i=c.find(n.sections,function(e){return e.id===t.section}),o=c.find(i.rows,function(e){return e.id===t.row}),r=c.find(o.columns,function(e){return e.id===t.column});c.remove(r.widgets,function(e){return e.id===t.widget.id}),C["export"]()},window.application=C,C};this.setApplicationSettings=function(e){t=e},this.$get=["$compile","$rootScope","$timeout","vnProduct","vnCategory","iframeService","applicationIframe","applicationFunctions","lodash",function(e,t,i,o,r,a,s,l,d){return new n(e,t,i,o,r,a,s,l,d)}]}]),function(){angular.module("vnext.widgets").directive("carouselWidget",["$compile","$templateCache","$rootScope",function(e,t){return{restrict:"A",templateUrl:"carousel/carousel-widget.html",scope:{settings:"="},link:function(n,i){n.$watch("settings",function(){var o=t.get("carousel/carousel-widget.html");i.html(o),e(i.contents())(n)},!0)}}}])}(),function(){function e(){var e={restrict:"A",controller:["$scope","vnMenu",function(e,t){function n(){e.navMenu=void 0;var n=e.settings;angular.isDefined(n.navMenuId)?t.getById(n.navMenuId).then(function(t){e.navMenu=t}):t.getAll().then(function(t){e.navMenu=t[n.menuIndex]})}var i={menuIndex:0},o=angular.copy(e.settings);e.settings=angular.extend(e.settings||{},i,o),n(),e.reRender=e.reRender||{},e.reRender.run=n}]};return e}angular.module("vnext.widgets").directive("vnNavMenuWrapper",e)}(),function(){function e(){var e={restrict:"EA",controllerAs:"vm",controller:["$rootScope","$scope","vnProduct","vNextCart",function(e,t,n,i){function o(){angular.isDefined(t.resolves)&&angular.isDefined(t.resolves.pageContext)&&angular.isDefined(t.resolves.pageContext.sortBy)&&(t.settings.sortBy=t.resolves.pageContext.sortBy),l=t.settings.sortBy,t.products=[];var e;angular.isDefined(t.resolves)&&angular.isDefined(t.resolves.category)&&(e=t.resolves.category),t.settings.useParentContext&&e&&(t.settings.categoryId=e.id),angular.isDefined(t.settings.productIds)&&angular.isArray(t.settings.productIds)&&t.settings.productIds.length>0?(t.productPager=n.getManyByProductIds(t.settings.productIds,t.settings.numberOfItems,l),t.productPager.next().then(function(e){t.products=s(e),a(t.productPager,t)})):angular.isDefined(t.settings.categoryId)&&t.settings.categoryId.length>0?(t.productPager=n.getByCategory(t.settings.categoryId,t.settings.numberOfItems,l),t.productPager.next().then(function(e){t.products=s(e),a(t.productPager,t)})):(t.productPager=n.getProducts(t.settings.numberOfItems,"",l),t.productPager.next().then(function(e){t.products=s(e),a(t.productPager,t)}))}function r(e){return angular.isDefined(e)&&angular.isString(e.id)&&e.id.length>0}function a(n,i){i.totalProductCount=n.getTotalCount(),i.pageCount=n.getPageCount(),i.productsPerPage=n.getPageSize(),t.handlePageChanged=function(t){n.goToPage(t).then(function(n){i.products=s(n),e.$emit("ProductList:PageChanged",t)})}}function s(t){return angular.forEach(t,function(t){t.images&&0!==t.images.length||(t.images=t.images||[],t.images.push({imageLink:{fullUri:e.defaultProductImage}}))})}var l,d={numberOfItems:4},c=angular.copy(t.settings);t.settings=angular.extend(t.settings||{},d,c),o(),t.reRender.run=o,t.updateSortBy=function(n){angular.isDefined(t.resolves)&&angular.isDefined(t.resolves.pageContext)&&angular.isDefined(t.resolves.pageContext.sortBy)&&(t.resolves.pageContext.sortBy=void 0),t.settings.sortBy=n.query,o(),e.$emit("ProductList:SortChanged",t.settings.sortBy)},t.addProductToCart=function(t,n){if(!r(t))throw new Error("Please pass in a valid product");var o={product:t,quantity:n||1};return i.addItemToCart(o).then(function(){e.$emit("CartEvents.GoToCart")})}}]};return e}angular.module("vnext.widgets").directive("vnProductList",e),e.$inject=["vnProduct"]}(),function(){function e(){var e={restrict:"EA",controller:function(e,t){function n(){var n=e.resolves.product;e.settings.useParentContext&&n?e.product=n:angular.isDefined(e.settings.productId)?t.getById(e.settings.productId).then(function(t){e.product=t}):angular.isDefined(e.settings.productSlug)&&t.getBySlug(e.settings.productSlug).then(function(t){e.product=t})}e.product={images:[]},n(),e.reRender.run=n}};return e}angular.module("vnext.widgets").directive("vnProductWrapper",e)}(),function(){function e(e,t){function n(n){function o(e){return e.data}function r(t){e.error("XHR Failed for getContributors.\n"+angular.toJson(t.data,!0))}return n||(n=30),t.get(i+"/contributors?per_page="+n).then(o)["catch"](r)}var i="https://api.github.com/repos/Swiip/generator-gulp-angular",o={apiHost:i,getContributors:n};return o}angular.module("vnext.widgets").factory("githubContributor",e),e.$inject=["$log","$http"]}(),function(){function e(){function e(){}var t={restrict:"A",templateUrl:"html/html-widget.html",scope:{settings:"="},controller:e};return t}angular.module("vnext.widgets").directive("htmlWidget",e)}(),function(){function e(){function e(){}var t={restrict:"A",templateUrl:"image/image-widget.html",scope:{settings:"="},controller:e};return t}angular.module("vnext.widgets").directive("imageWidget",e)}(),angular.module("vnext.widgets").directive("vnCol",["$compile","vnProduct","editMode","application",function(e,t,n,i){var o={scope:{settings:"="},controller:["$scope","$element",function(e,o){e.editMode=n(),e.dynamicPopover={templateUrl:"layout/insertWidget.html",title:"Insert Widget"},t.getAll({pageSize:4,sortBy:"code"}).then(function(t){e.products=t,e.prod=t[0]}),e.widgetDefinitions=i.getWidgetDefinitions(),e.destroy=function(){i.deleteColumn(e.$parent.vnController.id),e.$destroy(),o.remove(),i["export"]()},e.insert=function(t,n){var r={title:t.title,directiveName:t.directiveName,category:t.category,settings:i.generateSettings(t.settings).settings},t=e.$parent.vnController.createWidget(r);t.render(e,o,n),i["export"]()}}],restrict:"AE",replace:!0,templateUrl:"layout/column.html"};return o}]),angular.module("vnext.widgets").directive("editableSection",["$rootScope","application","editMode",function(e,t,n){var i={transclude:!0,scope:{sectionId:"@",page:"@?"},controller:["$scope","$element","$transclude",function(i,o,r){i.editMode=n(),i.reRender={run:angular.noop},r(i,function(e){o.append(e)}),t.editableSections[i.sectionId]&&t.renderSection(i,i.sectionId,i.page),e.$on("updateSections",function(){t.renderSection(i,i.sectionId,i.page),i.reRender.run()}),e.$on("updateSections:"+i.sectionId,function(){t.renderSection(i,i.sectionId,i.page),i.reRender.run()})}],restrict:"AE",template:"<div vn-menu-editor></div>",replace:!0};return i}]),angular.module("vnext.widgets").directive("vnImage",["application","$rootScope",function(e){var t={scope:{vnImage:"@"},controller:["$scope","$element","$attrs",function(t,n,i){i.$set("src",e.getImage(t.vnImage)),t.$on("updateImages",function(){i.$set("src",e.getImage(t.vnImage))}),t.$on("updateImages:"+t.vnImage,function(){i.$set("src",e.getImage(t.vnImage))})}]};return t}]),angular.module("vnext.widgets").directive("vnLabel",["application","$rootScope",function(e){var t={scope:{vnLabel:"@"},controller:["$scope","$element",function(t,n){n.text(e.getLabel(t.vnLabel)),t.$on("updateLabels",function(){n.text(e.getLabel(t.vnLabel))}),t.$on("updateLabels:"+t.vnLabel,function(){n.text(e.getLabel(t.vnLabel))})}]};return t}]),angular.module("vnext.widgets").directive("vnPage",["application",function(e){var t={scope:{vnPage:"@"},controller:["$scope",function(t){var n;e.ready(function(e){n=e.findPageByName(t.vnPage),n.setScope(t),n.render(t)})}],restrict:"AE",replace:!0};return t}]),angular.module("vnext.widgets").directive("vnRow",["editMode","application",function(e,t){var n={scope:{settings:"="},controller:["$scope","$element",function(n,i){n.dynamicPopover={templateUrl:"layout/insertColumn.html",title:"Insert Column"},n.editMode=e(),n.destroy=function(){t.deleteRow(n.$parent.vnController.id),n.$destroy(),i.remove(),t["export"]()},n.insert=function(){var e=n.$parent.vnController.createColumn({settings:{size:parseInt(n.size,10)}});e&&e.render(n.$parent,i),t["export"]()}}],restrict:"AE",templateUrl:"layout/row.html",replace:!0};return n}]),angular.module("vnext.widgets").directive("vnSection",["editMode",function(e){var t={scope:{setting:"="},controller:["$scope","$element",function(t,n){t.editMode=e(),t.insert=function(){var e=t.$parent.vnController.createRow();e.render(t.$parent,n)}}],restrict:"AE",templateUrl:"layout/section.html",replace:!0};return t}]),angular.module("vnext.widgets").directive("widget",["application","editMode",function(e,t){var n={transclude:!0,templateUrl:"layout/widget.html",replace:!0,controller:["$scope","$element","$transclude",function(n,i,o){this.widget=n.vnController,o(n,function(e){i.find(".ng-transclude").append(e)}),n.editMode=t(),n.editMode&&(n.dynamicPopover={templateUrl:"layout/insertWidget.html",title:"Insert Widget"},n.widgetDefinitions=e.getWidgetDefinitions()),n.insert=function(t){var i={title:t.title,directiveName:t.directiveName,category:t.category,settings:e.generateSettings(t.settings).settings},o=n.$parent.vnController.createWidget(i,this.vnController.id);o.render(n.$parent,null,this.vnController.id),e["export"]()},n.application=e,n.destroy=function(){e.deleteWidget(n.vnController.id),n.$destroy(),i.remove()},n.showWidgetMenu=function(){parent.postMessage(JSON.stringify({widget:{title:n.vnController.title,directiveName:n.vnController.directiveName,id:n.vnController.id,settings:n.settings,context:n.resolves}}),"*")}}]};return n}]),angular.module("vnext.widgets").constant("widgetDefinitions",{generateSettings:function(e){var t={};return e.map(function(e){t[e.id]=e["default"]}),{settings:t}},widgets:[{id:"product",title:"Product",category:"Content",icon:"http://pathtoicon.com/icon.png",directiveName:"product-widget",settings:[{id:"useParentContext",label:"Use Parent Context",type:"toggle","default":!0},{id:"productId",label:"Product",type:"productId","default":"55db2903a5fc97041c8f00c2"}]},{id:"html",title:"HTML",category:"Content",icon:"http://pathtoicon.com/icon.png",directiveName:"html-widget",settings:[{id:"html",label:"HTML",type:"html","default":"<div><strong>lorem</strong> <em>this</em> is <h1>html</h1></div>"}]},{id:"image",title:"Image",category:"Content",icon:"http://pathtoicon.com/icon.png",directiveName:"image-widget",settings:[{id:"src",label:"Image",type:"image-single","default":{imageUrl:"https://www.google.com/images/srpr/logo11w.png"}},{id:"alt",label:"Alt Tag",type:"text","default":"Image"},{id:"href",label:"Link",type:"text","default":"#"}]},{id:"video",title:"Video",category:"Media",icon:"http://pathtoicon.com/icon.png",directiveName:"video-widget",settings:[{id:"videoUrl",label:"Video Url",type:"text","default":"https://www.youtube.com/watch?v=xI4W6c1QjIw"},{id:"width",label:"Player width",type:"text","default":"100%"},{id:"height",label:"Player height",type:"text","default":"300px"}]},{id:"product-list",title:"Product List",category:"Content",icon:"http://pathtoicon.com/icon.png",directiveName:"product-list-widget",settings:[{id:"categoryId",label:"Category",type:"categoryId","default":"55d620589c5a6a182057805d"},{id:"productIds",label:"Products",type:"productId-multi","default":[]},{id:"numberOfItems",label:"Number of Items",type:"dropdown",values:[1,2,3,4,5,6,7,8,9,10],"default":4},{id:"numberOfColumns",label:"Number of Columns",type:"dropdown",values:[1,2,3,4,5,6,7,8,9,10],"default":4},{id:"showProductDescription",label:"Show Descriptions",type:"toggle","default":!0},{id:"title",label:"Grid Title",type:"text","default":"Products"}]},{id:"carousel",title:"Carousel",icon:"http://pathtoicon.com/icon.png",category:"Content",directiveName:"carousel-widget",settings:[{id:"images",label:"Images",type:"image-multi","default":[{imageUrl:"http://design51.volusion.com/v/vspfiles/photos/homepage/1416874443909.jpg",linkUrl:"/p/picture-frame",alt:"Picture Frame"},{imageUrl:"http://design51.volusion.com/v/vspfiles/photos/homepage/1416875566619.jpg",linkUrl:"/p/3-drawer-chest",alt:"Drawer"},{imageUrl:"http://design51.volusion.com/v/vspfiles/photos/homepage/1416874482014.jpg",linkUrl:"/p/decorative-pillows",alt:"Pillows"}]},{id:"animation",label:"Animation",type:"dropdown",values:["Fade","Slide"],defaults:"Fade"},{id:"speed",label:"Speed",type:"dropdown",values:[2e3,4e3,6e3],"default":4e3},{id:"dots",label:"Dots",type:"toggle","default":!0},{id:"arrows",label:"Arrows",type:"toggle","default":!1},{id:"autoplay",label:"Autoplay",type:"toggle","default":!0},{id:"infinite",label:"infinite",type:"toggle","default":!0},{id:"slidesInView",label:"slidesInView",type:"integer","default":1},{id:"slidesToScroll",label:"slidesToScroll",type:"integer","default":1}]}]}),function(){function e(e){function t(t,n,i,o){var r,a=e(n[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});n.addClass("acme-malarkey"),angular.forEach(t.extraValues,function(e){a.type(e).pause()["delete"]()}),r=t.$watch("vm.contributors",function(){angular.forEach(o.contributors,function(e){a.type(e.login).pause()["delete"]()})}),t.$on("$destroy",function(){r()})}function n(e,t){function n(){return i().then(function(){e.info("Activated Contributors View")})}function i(){return t.getContributors(10).then(function(e){return o.contributors=e,o.contributors})}var o=this;o.contributors=[],n()}var i={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:t,controller:n,controllerAs:"vm"};return i}angular.module("vnext.widgets").directive("acmeMalarkey",e),e.$inject=["malarkey"]}(),function(){function e(){var e={restrict:"A",templateUrl:"navigation/navigation-widget.html",scope:{settings:"="}};return e}angular.module("vnext.widgets").directive("navigationWidget",e)}(),function(){function e(){function e(e){var t=this;t.relativeDate=e(t.creationDate).fromNow()}var t={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:e,controllerAs:"vm",bindToController:!0};return t}angular.module("vnext.widgets").directive("acmeNavbar",e)}(),function(){function e(){function e(){}var t={restrict:"A",templateUrl:"product/product-widget.html",scope:{settings:"=",resolves:"=",reRender:"="},controller:e};return t}angular.module("vnext.widgets").directive("productWidget",e)}(),function(){function e(){var e={restrict:"A",templateUrl:"productList/product-list-widget.html",scope:{settings:"=",resolves:"=",reRender:"="}};return e}angular.module("vnext.widgets").directive("productListWidget",e)}(),function(){function e(){var e={restrict:"A",replace:!0,templateUrl:"siteTitle/site-title.html",scope:{settings:"="},controller:["$scope",function(){}]};return e}angular.module("vnext.widgets").directive("siteTitleWidget",e)}(),function(){angular.module("vnext.widgets").directive("socialWidget",["vnAdminStoreInfo",function(e){return{restrict:"A",templateUrl:"socialWidget/social-widget.html",scope:{settings:"="},link:function(t){e.getInfo().then(function(e){console.log(e),t.social=e[0].socialNetworks},function(e){console.log(e)})}}}])}(),function(){function e(){var e={restrict:"A",templateUrl:"video/video-widget.html",scope:{settings:"="}};return e}angular.module("vnext.widgets").directive("videoWidget",e)}(),function(){function e(){function e(){return t}var t=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Angular UI Bootstrap",url:"http://angular-ui.github.io/bootstrap/",description:"Bootstrap components written in pure AngularJS by the AngularUI Team.",logo:"ui-bootstrap.png"},{title:"Less",url:"http://lesscss.org/",description:"Less extends the CSS language, adding features that allow variables, mixins, functions and many other techniques.",logo:"less.png"}];
this.getTec=e}angular.module("vnext.widgets").service("webDevTec",e)}();