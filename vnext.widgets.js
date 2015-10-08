"use strict";angular.module("vnext.widgets.constants",[]).constant("widgets",{"product-list-widget":{id:"product-list-widget",directiveName:"product-list-widget",title:"Product List",category:"Content",settings:[{id:"title",label:"Grid Title",type:"text","default":"Products"},{id:"useParentContext",label:"Use Parent Context",type:"toggle","default":!0},{id:"categoryId",label:"Category",type:"categoryId","default":""},{id:"productIds",label:"Products",type:"productId-multi","default":[]},{id:"numberOfItems",label:"Number of Products",type:"dropdown",values:[1,2,3,4,5,6,7,8,9,10],"default":4},{id:"numberOfColumns",label:"Number of Columns",type:"dropdown",values:[1,2,3,4,5,6],"default":4},{id:"displayType",label:"Display as",type:"complex-dropdown",values:[{display:"Grid",value:"grid"},{display:"List",value:"list"}],"default":"grid"},{id:"sortBy",label:"Sort By",type:"complex-dropdown",values:[{display:"Price: Highest to Lowest",value:"price+desc"},{display:"Price: Lowest to Highest",value:"price+asc"},{display:"Name: Ascending",value:"name+asc"},{display:"Name: Descending",value:"name+desc"},{display:"Newest",value:"lastUpdated+desc"}],"default":"lastUpdated+desc"},{id:"showProductDescription",label:"Show Descriptions",type:"toggle","default":!0},{id:"displayPaging",label:"Display Paging",type:"toggle","default":!1},{id:"showAddToCart",label:"Show Add to Cart",type:"toggle","default":!1},{id:"enableSort",label:"Display Sort",type:"toggle","default":!1}]},"navigation-widget":{id:"navigation-widget",directiveName:"navigation-widget",title:"Navigation Menu",category:"Navigation",settings:[{id:"menuId",label:"Menu",type:"menu-resource","default":"0"}]},"image-widget":{id:"image-widget",directiveName:"image-widget",title:"Image",category:"Content",settings:[{id:"src",label:"Image",type:"image-single","default":{fullUri:"https://www.google.com/images/srpr/logo11w.png"}},{id:"alt",label:"Alt Tag",type:"text","default":"Image"},{id:"href",label:"Link",type:"text","default":"#"}]},"product-widget":{id:"product-widget",directiveName:"product-widget",title:"Product",category:"Content",settings:[{id:"useParentContext",label:"Use Parent Context",type:"toggle","default":!0},{id:"productId",label:"Product",contextSensitive:["product"],type:"productId","default":"55db4ab24d7132045ce084c1"}]},"html-widget":{id:"html-widget",directiveName:"html-widget",title:"HTML",category:"Content",settings:[{id:"html",label:"HTML",type:"html","default":"My <b>HTML</b> content"}]},"video-widget":{id:"video-widget",directiveName:"video-widget",title:"Video",category:"Media",settings:[{id:"videoUrl",label:"Video Url",type:"text","default":"https://www.youtube.com/watch?v=xI4W6c1QjIw"},{id:"autoplay",label:"Autoplay",type:"toggle","default":!1}]},"social-widget":{id:"social-widget",directiveName:"social-widget",title:"Social",category:"Content",settings:[{id:"newTab",label:"Open links in new tab",type:"toggle","default":!0}]},"carousel-widget":{id:"carousel-widget",directiveName:"carousel-widget",title:"Carousel",category:"Content",settings:[{id:"dots",label:"Dots",type:"toggle","default":!0},{id:"arrows",label:"Arrows",type:"toggle","default":!1},{id:"autoplay",label:"Autoplay",type:"toggle","default":!0},{id:"speed",label:"Time per slide (ms)",type:"dropdown",values:[2e3,4e3,6e3],"default":4e3},{id:"animation",label:"Transition Effect",type:"dropdown",values:["Slide","Fade"],"default":"Slide"},{id:"slides",label:"Slides",type:"image-slides","default":[{fullUri:"http://res.cloudinary.com/dyx4yhvoq/image/upload/v1441216255/1/cr3v5gfmkqr5f4sg9018.jpg",imageAlt:"Image",imageLink:"#"},{fullUri:"http://res.cloudinary.com/dyx4yhvoq/image/upload/v1441216255/1/cr3v5gfmkqr5f4sg9018.jpg",imageAlt:"Image",imageLink:"#"},{fullUri:"http://res.cloudinary.com/dyx4yhvoq/image/upload/v1441216255/1/cr3v5gfmkqr5f4sg9018.jpg",imageAlt:"Image",imageLink:"#"}]}]}}),angular.module("vnext.widgets",["ngAnimate","ngCookies","ngTouch","ngSanitize","ui.bootstrap","vnext.components","vnext.widgets.templates","vNext","videosharing-embed","vnext.widgets.constants"]),angular.module("vnext.widgets").constant("editMode",function(){return!1}).service("application",["$compile","widgets","lodash","$rootScope","$timeout","$http","vnProduct","vnCategory","vNextStoreInfo","iframeService",function(e,t,n,i,o,r,s,a,l,d){function g(){return this.id}function c(e,t,n,i){var o={product:{api:s},category:{api:a}},r={};for(var l in o)r[l]=e&&e[l]&&n?e[l].clone():o[l].api.chain(),t&&t[l]&&u(r[l],t[l],l,i);return r}function u(e,t,n,i){e&&t&&("resolve"===t.type?"product"===n&&console.log(i):e.addFilter().key(t.key)[t.comparison](t.value))}function p(t,n){return t=t||"",n=n||"",function(i,r,s){var a=i.$new();a.settings=this.settings?this.settings:{},a.resolves=this.getPage().getResolves(),a.reRender=this.reRender,this.setContext(c(this.getParent().getContext(),this.context,this.settings?this.settings.useParentContext:!1,a)),a.vnController=this,this.setScope(a);var l=e(t+"<div "+this.directiveName+' settings="settings" resolves="resolves" re-render="reRender"></div>'+n)(a);return"undefined"!=typeof s?o(function(){angular.element('[widget-id="widget'+s+'"]').before(l)},0,!0):o(function(){r.append(l)},0,!0),{element:l,scope:a}}}function f(e,t,n,i,o){angular.extend(this,e);var r,s;this.reRender={run:angular.noop},this.getContext=function(){return s},this.setContext=function(e){s=e},this.getPage=function(){return t},this.getResolves=function(){return this.getPage().getResolves()},this.setContext=function(e){s=e},this.getSection=function(){return n},this.getRow=function(){return i},this.getColumn=function(){return o},this.getParent=this.getColumn,this.setScope=function(e){r=e},this.getScope=function(){return r},this.id||(this.id=b.counters.widgetId++),this.getId=g,this.render=p('<widget class="vn-widget">',"</widget>")}function h(e,t,n,i){var o,r;this.getContext=function(){return r},this.setContext=function(e){r=e},this.getPage=function(){return t},this.getSection=function(){return n},this.getRow=function(){return i},this.getParent=this.getRow,this.setScope=function(e){o=e},this.getScope=function(){return o},this.widgets=[],this.getId=g,this.directiveName="vn-col",this.render=p(),this.createWidget=function(e,o){var r=new f(e,t,n,i,this);if(o){for(var s=0,a=this.widgets.length;a>s&&this.widgets[0].id!==o;s++);this.widgets.splice(s,0,r)}else this.widgets.push(r);return I.push(b.getWidgetData(r.id)),r},angular.extend(this,e),this.id||(this.id=b.counters.columnId++)}function m(e,t,n){var i,o;this.getContext=function(){return o},this.setContext=function(e){o=e},this.getPage=function(){return t},this.getSection=function(){return n},this.getParent=this.getSection,this.setScope=function(e){i=e},this.getScope=function(){return i},this.columns=[],this.getId=g,this.directiveName="vn-row",this.render=p(),this.createColumn=function(e){if(this.columns.length>=12)return!1;var i=new h(e,t,n,this);return this.columns.push(i),i},angular.extend(this,e),this.id||(this.id=b.counters.rowId++)}function v(e,t){var n,i;this.getContext=function(){return i},this.setContext=function(e){i=e},this.getPage=function(){return t},this.getParent=this.getPage,this.setScope=function(e){n=e},this.getScope=function(){return n},this.rows=[],this.getId=g,this.directiveName="vn-section",this.render=p(),this.createRow=function(e){var n=new m(e,t,this);return this.rows.push(n),n},angular.extend(this,e),this.id||(this.id=b.counters.sectionId++)}function w(e){var t,i,o;this.getContext=function(){return i},this.setContext=function(e){i=e},this.getResolves=function(){return o},this.setResolves=function(e){o=e},this.sections=[],this.name="",angular.extend(this,e),this.id||(this.id=b.counters.pageId++),this.getId=g,this.setScope=function(e){t=e,t.getContext=this.getContext},this.getScope=function(){return t},this.getContext=function(){return i},this.render=function(i){this.setContext(c(null,e.context,!1,t)),n.forEach(this.sections,function(e){var t=e.render(i,angular.element('[dropzone="'+e.name+'"]'));n.forEach(e.rows,function(e){var i=e.render(t.scope,t.element);n.forEach(e.columns,function(e){var t=e.render(i.scope,i.element);n.forEach(e.widgets,function(e){e.render(t.scope,t.element)})})})})},this.createSection=function(e){var t=new v(e,this);return this.sections.push(t),t}}function y(e){var t={};return e.map(function(e){t[e.id]=e["default"]}),{settings:t}}var b={settings:{},labels:{},images:{},pages:[],editableSectionDefinitions:{},customWidgetDefinitions:{},editableSections:{},counters:{pageId:0,sectionId:0,rowId:0,columnId:0,widgetId:0}},C=[],x=!1;b.ready=function(e){x?e(b):C.push(e)},b.onReady=function(){n.forEach(C,function(e){e(b)})},b.disableStateChange=function(){S=!1},b.enableStateChange=function(){S=!0};var S=!0;b.initTheme=function(e){i.$on("$stateChangeStart",function(e){S||e.preventDefault()}),i.$on("$stateChangeSuccess",function(e,t,n){d.sendMessageToAdmin("pageChange",{stateName:t,stateParams:n})}),d.listenToParentWindow(),b.setCustomWidgetDefinitions(e.customWidgetDefinitions),r.get("/settings/application.json").success(function(t){b.load(t),d.sendMessageToAdmin("angularInitialized",e),x=!0,b.onReady()})},b.setCustomWidgetDefinitions=function(e){e&&(b.customWidgetDefinitions=e)},b.styleEditorFirstpass=!0,i.$on("iframeMessageReceived",function(e,t){"admin-widget-editor"===t.sender?"previewStoreInfoChanges"===t.event?b.previewStoreInfoChanges(t.data):"previewEditableChanges"===t.event?b.previewEditableChanges(t.data):"previewWidgetChanges"===t.event?(b.previewWidgetChanges(t.data.id,t.data.settings),i.$apply()):"highlightCategory"===t.event?b.highlightCategory(t.data):"highlightWidget"===t.event?b.highlightWidget(t.data):"highlightEditable"===t.event?b.highlightEditable(t.data):"highlightDirective"===t.event?b.highlightDirective(t.data):"unhighlightCategory"===t.event?b.unhighlightCategory():"unhighlightWidget"===t.event?b.unhighlightWidget():"unhighlightEditable"===t.event?b.unhighlightEditable():"unhighlightDirective"===t.event?b.unhighlightDirective(t.data):"unhighlightAll"===t.event?b.unhighlightAll():"saveChanges"===t.event?b["export"]():"disableStateChange"===t.event?b.disableStateChange():"enableStateChange"===t.event?b.enableStateChange():"scrollToTop"===t.event?b.scrollToTop():"requestWidgetSettingsMenu"===t.event&&b.getWidgetData(t.data).widget.getScope().showWidgetMenu():"admin-style-editor"===t.sender?"sendRawCss"===t.event?$('style[id="compiled-css"]').html(t.data):"sendCompiledLESS"===t.event&&($('<style id="compiled-styles">'+t.data+"</style>").appendTo("head"),b.styleEditorFirstpass===!0?($('link[href="/styles/main.css"]').remove(),b.styleEditorFirstpass=!1):$('style[id="compiled-styles"]').first().remove()):"admin"===t.sender&&("disableStateChange"===t.event?b.disableStateChange():"enableStateChange"===t.event&&b.enableStateChange())}),b.getWidgetDefinitions=function(){return n.merge(t,b.customWidgetDefinitions)};var I=[];return b.getEditableWidgets=function(e){var t=I;if(e)var t=n.select(I,function(t){return t.widget.getPage().name==e});return t.map(function(e){return{title:e.widget.title,directiveName:e.widget.directiveName,id:e.widget.id,settings:e.widget.settings,context:e.widget.getPage().context}})},b.generateSettings=function(e){var t={};return e.map(function(e){t[e.id]=e["default"]}),{settings:t}},b.setLabel=function(e,t){b.labels[e]=t},b.getLabel=function(e){return b.labels[e]},b.setImage=function(e,t){b.images[e]=t},b.getImage=function(e){return b.images[e]},b.renderSection=function(e,t,n){n&&angular.extend(e,{resolves:b.findPageByName(n).getResolves()}),e.settings=b.editableSections[t].settings},b.setSectionSettings=function(e){angular.extend(b.editableSections[e.id].settings,e.settings),i.$apply()},b.previewEditableChanges=function(e){b.setSectionSettings(e),i.$emit("updateSections:"+e.id)},b.previewStoreInfoChanges=function(e){i.storeInfo=e,i.$apply()},b.createPage=function(e){var t=new w(e);return b.pages.push(t),t},b.get=function(){return b},b.load=function(e){angular.extend(b,angular.copy(e)),i.$broadcast("updateLabels"),i.$broadcast("updateImages"),i.$broadcast("updateSections");for(var t=0,n=b.pages.length;n>t;t++)for(var o=b.pages[t]=new w(b.pages[t]),r=0,s=b.pages[t].sections.length;s>r;r++)for(var a=b.pages[t].sections[r]=new v(b.pages[t].sections[r],o),l=0,d=b.pages[t].sections[r].rows.length;d>l;l++)for(var g=b.pages[t].sections[r].rows[l]=new m(b.pages[t].sections[r].rows[l],o,a),c=0,u=b.pages[t].sections[r].rows[l].columns.length;u>c;c++)for(var p=b.pages[t].sections[r].rows[l].columns[c]=new h(b.pages[t].sections[r].rows[l].columns[c],o,a,g),y=0,C=b.pages[t].sections[r].rows[l].columns[c].widgets.length;C>y;y++){var x=b.pages[t].sections[r].rows[l].columns[c].widgets[y]=new f(b.pages[t].sections[r].rows[l].columns[c].widgets[y],o,a,g,p);I.push({page:o.id,section:a.id,row:g.id,column:p.id,widget:x})}b.counters=e.counters},b.getWidgets=function(){return I},b.findWidgetDataById=function(e){return n.find(I,function(t){return t.widget.id===e})},b.findWidgetById=function(e){return b.findWidgetDataById(e).widget},b.getWidgetData=function(e){for(var t=0,n=b.pages.length;n>t;t++)for(var i=0,o=b.pages[t].sections.length;o>i;i++)for(var r=0,s=b.pages[t].sections[i].rows.length;s>r;r++)for(var a=0,l=b.pages[t].sections[i].rows[r].columns.length;l>a;a++)for(var d=0,g=b.pages[t].sections[i].rows[r].columns[a].widgets.length;g>d;d++)if(b.pages[t].sections[i].rows[r].columns[a].widgets[d].id===e)return{page:b.pages[t].id,section:b.pages[t].sections[i].id,row:b.pages[t].sections[i].rows[r].id,column:b.pages[t].sections[i].rows[r].columns[a].id,widget:b.pages[t].sections[i].rows[r].columns[a].widgets[d]}},b.previewWidgetChanges=function(e,t){var n=b.findWidgetById(e);return angular.extend(n.settings,t),n.reRender.run(),i.$apply(),n},b["export"]=function(){r.post("/widget",b).then(function(e){console.log(e)},function(e){console.error(e)}),console.log(b)},b.findPageByName=function(e){return n.find(b.pages,function(t){return t.name===e})},b.insert=function(e,t,n){var i={title:e.title,directiveName:e.directiveName,category:e.category,settings:y(e.settings).settings},o=new f(i);o.render(t,null,n),b["export"]()},b.hoverClassName="vn-widget--hover",b.highlightWidget=function(e){var t=angular.element('[widget-id="widget'+e+'"]');t.addClass(b.hoverClassName),b.scrollTo(t)},b.highlightEditable=function(e){var t=angular.element('[editable-section][section-id="'+e+'"]');t.addClass(b.hoverClassName),b.scrollTo(t)},b.highlightCategory=function(e){b.unhighlightCategory();var e=angular.element('[theme-section][section-id="'+e+'"]');e.addClass(b.hoverClassName),b.scrollTo(e)},b.highlightDirective=function(e){var t=angular.element("["+e+"]");t.addClass(b.hoverClassName),b.scrollTo(t)},b.unhighlightEditable=function(){angular.element("[editable-section][section-id]").removeClass(b.hoverClassName)},b.unhighlightCategory=function(){angular.element("[theme-section]").removeClass(b.hoverClassName)},b.unhighlightWidget=function(){angular.element("[widget-id]").removeClass(b.hoverClassName)},b.unhighlightDirective=function(e){angular.element("["+e+"]").removeClass(b.hoverClassName)},b.unhighlightAll=function(){angular.element("."+b.hoverClassName).each(function(){angular.element(this).removeClass(b.hoverClassName)})},b.scrollToTop=function(){angular.element("html,body").animate({scrollTop:0},"slow")},b.scrollTo=function(e){angular.element("html,body").animate({scrollTop:e.offset().top-50},"slow")},b.deleteRow=function(e){for(var t=0,i=b.pages.length;i>t;t++)for(var o=0,r=b.pages[t].sections.length;r>o;o++)n.remove(b.pages[t].sections[o].rows,function(t){return t.id===e})},b.deleteColumn=function(e){for(var t=0,i=b.pages.length;i>t;t++)for(var o=0,r=b.pages[t].sections.length;r>o;o++)for(var s=0,a=b.pages[t].sections[o].rows.length;a>s;s++)n.remove(b.pages[t].sections[o].rows[s].columns,function(t){return t.id===e})},b.deleteWidget=function(e){var t=b.findWidgetDataById(e);t||(t=b.getWidgetData(e));var i=n.find(this.pages,function(e){return e.id===t.page}),o=n.find(i.sections,function(e){return e.id===t.section}),r=n.find(o.rows,function(e){return e.id===t.row}),s=n.find(r.columns,function(e){return e.id===t.column});n.remove(s.widgets,function(e){return e.id===t.widget.id}),b["export"]()},window.application=b,b}]),function(){function e(){var e={restrict:"A",controller:["$scope","vnMenu",function(e,t){function n(){e.navMenu=void 0;var n=e.settings;angular.isDefined(n.navMenuId)?t.getById(n.navMenuId).then(function(t){e.navMenu=t}):t.getAll().then(function(t){e.navMenu=t[n.menuIndex]})}var i={menuIndex:0},o=angular.copy(e.settings);e.settings=angular.extend(e.settings||{},i,o),n(),e.reRender=e.reRender||{},e.reRender.run=n}]};return e}angular.module("vnext.widgets").directive("vnNavMenuWrapper",e)}(),function(){function e(){var e={restrict:"EA",controllerAs:"vm",controller:["$rootScope","$scope","vnProduct","vNextCart",function(e,t,n,i){function o(){angular.isDefined(t.resolves)&&angular.isDefined(t.resolves.pageContext)&&angular.isDefined(t.resolves.pageContext.sortBy)&&(t.settings.sortBy=t.resolves.pageContext.sortBy),l=t.settings.sortBy,t.products=[];var e;angular.isDefined(t.resolves)&&angular.isDefined(t.resolves.category)&&(e=t.resolves.category),t.settings.useParentContext&&e&&(t.settings.categoryId=e.id),angular.isDefined(t.settings.productIds)&&angular.isArray(t.settings.productIds)&&t.settings.productIds.length>0?(t.productPager=n.getManyByProductIds(t.settings.productIds,t.settings.numberOfItems,l),t.productPager.next().then(function(e){t.products=a(e),s(t.productPager,t)})):angular.isDefined(t.settings.categoryId)&&t.settings.categoryId.length>0?(t.productPager=n.getByCategory(t.settings.categoryId,t.settings.numberOfItems,l),t.productPager.next().then(function(e){t.products=a(e),s(t.productPager,t)})):(t.productPager=n.getProducts(t.settings.numberOfItems,"",l),t.productPager.next().then(function(e){t.products=a(e),s(t.productPager,t)}))}function r(e){return angular.isDefined(e)&&angular.isString(e.id)&&e.id.length>0}function s(n,i){i.totalProductCount=n.getTotalCount(),i.pageCount=n.getPageCount(),i.productsPerPage=n.getPageSize(),t.handlePageChanged=function(t){n.goToPage(t).then(function(n){i.products=a(n),e.$emit("ProductList:PageChanged",t)})}}function a(t){return angular.forEach(t,function(t){t.images&&0!==t.images.length||(t.images=t.images||[],t.images.push({imageLink:{fullUri:e.defaultProductImage}}))})}var l,d={numberOfItems:4},g=angular.copy(t.settings);t.settings=angular.extend(t.settings||{},d,g),o(),t.reRender.run=o,t.updateSortBy=function(n){angular.isDefined(t.resolves)&&angular.isDefined(t.resolves.pageContext)&&angular.isDefined(t.resolves.pageContext.sortBy)&&(t.resolves.pageContext.sortBy=void 0),t.settings.sortBy=n.query,o(),e.$emit("ProductList:SortChanged",t.settings.sortBy)},t.addProductToCart=function(t,n){if(!r(t))throw new Error("Please pass in a valid product");var o={product:t,quantity:n||1};return i.addItemToCart(o).then(function(){e.$emit("CartEvents.GoToCart")})}}]};return e}angular.module("vnext.widgets").directive("vnProductList",e),e.$inject=["vnProduct"]}(),function(){function e(){var e={restrict:"EA",controller:function(e,t){function n(){var n=e.resolves.product;e.settings.useParentContext&&n?e.product=n:angular.isDefined(e.settings.productId)?t.getById(e.settings.productId).then(function(t){e.product=t}):angular.isDefined(e.settings.productSlug)&&t.getBySlug(e.settings.productSlug).then(function(t){e.product=t})}e.product={images:[]},n(),e.reRender.run=n}};return e}angular.module("vnext.widgets").directive("vnProductWrapper",e)}(),function(){angular.module("vnext.widgets").directive("carouselWidget",["$compile","$templateCache","$rootScope",function(e,t){return{restrict:"A",templateUrl:"carousel/carousel-widget.html",scope:{settings:"="},link:function(n,i){n.$watch("settings",function(){var o=t.get("carousel/carousel-widget.html");i.html(o),e(i.contents())(n)},!0)}}}])}(),function(){function e(e,t){function n(n){function o(e){return e.data}function r(t){e.error("XHR Failed for getContributors.\n"+angular.toJson(t.data,!0))}return n||(n=30),t.get(i+"/contributors?per_page="+n).then(o)["catch"](r)}var i="https://api.github.com/repos/Swiip/generator-gulp-angular",o={apiHost:i,getContributors:n};return o}angular.module("vnext.widgets").factory("githubContributor",e),e.$inject=["$log","$http"]}(),function(){function e(){function e(){}var t={restrict:"A",templateUrl:"html/html-widget.html",scope:{settings:"="},controller:e};return t}angular.module("vnext.widgets").directive("htmlWidget",e)}(),function(){function e(){function e(){}var t={restrict:"A",templateUrl:"image/image-widget.html",scope:{settings:"="},controller:e};return t}angular.module("vnext.widgets").directive("imageWidget",e)}(),angular.module("vnext.widgets").directive("vnCol",["$compile","vnProduct","editMode","application",function(e,t,n,i){var o={scope:{settings:"="},controller:["$scope","$element",function(e,o){e.editMode=n(),e.dynamicPopover={templateUrl:"layout/insertWidget.html",title:"Insert Widget"},t.getAll({pageSize:4,sortBy:"code"}).then(function(t){e.products=t,e.prod=t[0]}),e.widgetDefinitions=i.getWidgetDefinitions(),e.destroy=function(){i.deleteColumn(e.$parent.vnController.id),e.$destroy(),o.remove(),i["export"]()},e.insert=function(t,n){var r={title:t.title,directiveName:t.directiveName,category:t.category,settings:i.generateSettings(t.settings).settings},t=e.$parent.vnController.createWidget(r);t.render(e,o,n),i["export"]()}}],restrict:"AE",replace:!0,templateUrl:"layout/column.html"};return o}]),angular.module("vnext.widgets").directive("editableSection",["$rootScope","application","editMode",function(e,t,n){var i={transclude:!0,scope:{sectionId:"@",page:"@?"},controller:["$scope","$element","$transclude",function(i,o,r){i.editMode=n(),i.reRender={run:angular.noop},r(i,function(e){o.append(e)}),t.editableSections[i.sectionId]&&t.renderSection(i,i.sectionId,i.page),e.$on("updateSections",function(){t.renderSection(i,i.sectionId,i.page),i.reRender.run()}),e.$on("updateSections:"+i.sectionId,function(){t.renderSection(i,i.sectionId,i.page),i.reRender.run()})}],restrict:"AE",template:"<div vn-menu-editor></div>",replace:!0};return i}]),angular.module("vnext.widgets").directive("vnImage",["application","$rootScope",function(e){var t={scope:{vnImage:"@"},controller:["$scope","$element","$attrs",function(t,n,i){i.$set("src",e.getImage(t.vnImage)),t.$on("updateImages",function(){i.$set("src",e.getImage(t.vnImage))}),t.$on("updateImages:"+t.vnImage,function(){i.$set("src",e.getImage(t.vnImage))})}]};return t}]),angular.module("vnext.widgets").directive("vnLabel",["application","$rootScope",function(e){var t={scope:{vnLabel:"@"},controller:["$scope","$element",function(t,n){n.text(e.getLabel(t.vnLabel)),t.$on("updateLabels",function(){n.text(e.getLabel(t.vnLabel))}),t.$on("updateLabels:"+t.vnLabel,function(){n.text(e.getLabel(t.vnLabel))})}]};return t}]),angular.module("vnext.widgets").directive("vnPage",["application",function(e){var t={scope:{vnPage:"@"},controller:["$scope",function(t){var n;e.ready(function(e){n=e.findPageByName(t.vnPage),n.setScope(t),n.render(t)})}],restrict:"AE",replace:!0};return t}]),angular.module("vnext.widgets").directive("vnRow",["editMode","application",function(e,t){var n={scope:{settings:"="},controller:["$scope","$element",function(n,i){n.dynamicPopover={templateUrl:"layout/insertColumn.html",title:"Insert Column"},n.editMode=e(),n.destroy=function(){t.deleteRow(n.$parent.vnController.id),n.$destroy(),i.remove(),t["export"]()},n.insert=function(){var e=n.$parent.vnController.createColumn({settings:{size:parseInt(n.size,10)}});e&&e.render(n.$parent,i),t["export"]()}}],restrict:"AE",templateUrl:"layout/row.html",replace:!0};return n}]),angular.module("vnext.widgets").directive("vnSection",["editMode",function(e){var t={scope:{setting:"="},controller:["$scope","$element",function(t,n){t.editMode=e(),t.insert=function(){var e=t.$parent.vnController.createRow();e.render(t.$parent,n)}}],restrict:"AE",templateUrl:"layout/section.html",replace:!0};return t}]),angular.module("vnext.widgets").directive("widget",["application","editMode",function(e,t){var n={transclude:!0,templateUrl:"layout/widget.html",replace:!0,controller:["$scope","$element","$transclude",function(n,i,o){this.widget=n.vnController,o(n,function(e){i.find(".ng-transclude").append(e)}),n.editMode=t(),n.editMode&&(n.dynamicPopover={templateUrl:"layout/insertWidget.html",title:"Insert Widget"},n.widgetDefinitions=e.getWidgetDefinitions()),n.insert=function(t){var i={title:t.title,directiveName:t.directiveName,category:t.category,settings:e.generateSettings(t.settings).settings},o=n.$parent.vnController.createWidget(i,this.vnController.id);o.render(n.$parent,null,this.vnController.id),e["export"]()},n.application=e,n.destroy=function(){e.deleteWidget(n.vnController.id),n.$destroy(),i.remove()},n.showWidgetMenu=function(){parent.postMessage(JSON.stringify({widget:{title:n.vnController.title,directiveName:n.vnController.directiveName,id:n.vnController.id,settings:n.settings,context:n.resolves}}),"*")}}]};return n}]),angular.module("vnext.widgets").constant("widgetDefinitions",{generateSettings:function(e){var t={};return e.map(function(e){t[e.id]=e["default"]}),{settings:t}},widgets:[{id:"product",title:"Product",category:"Content",icon:"http://pathtoicon.com/icon.png",directiveName:"product-widget",settings:[{id:"useParentContext",label:"Use Parent Context",type:"toggle","default":!0},{id:"productId",label:"Product",type:"productId","default":"55db2903a5fc97041c8f00c2"}]},{id:"html",title:"HTML",category:"Content",icon:"http://pathtoicon.com/icon.png",directiveName:"html-widget",settings:[{id:"html",label:"HTML",type:"html","default":"<div><strong>lorem</strong> <em>this</em> is <h1>html</h1></div>"}]},{id:"image",title:"Image",category:"Content",icon:"http://pathtoicon.com/icon.png",directiveName:"image-widget",settings:[{id:"src",label:"Image",type:"image-single","default":{imageUrl:"https://www.google.com/images/srpr/logo11w.png"}},{id:"alt",label:"Alt Tag",type:"text","default":"Image"},{id:"href",label:"Link",type:"text","default":"#"}]},{id:"video",title:"Video",category:"Media",icon:"http://pathtoicon.com/icon.png",directiveName:"video-widget",settings:[{id:"videoUrl",label:"Video Url",type:"text","default":"https://www.youtube.com/watch?v=xI4W6c1QjIw"},{id:"width",label:"Player width",type:"text","default":"100%"},{id:"height",label:"Player height",type:"text","default":"300px"}]},{id:"product-list",title:"Product List",category:"Content",icon:"http://pathtoicon.com/icon.png",directiveName:"product-list-widget",settings:[{id:"categoryId",label:"Category",type:"categoryId","default":"55d620589c5a6a182057805d"},{id:"productIds",label:"Products",type:"productId-multi","default":[]},{id:"numberOfItems",label:"Number of Items",type:"dropdown",values:[1,2,3,4,5,6,7,8,9,10],"default":4},{id:"numberOfColumns",label:"Number of Columns",type:"dropdown",values:[1,2,3,4,5,6,7,8,9,10],"default":4},{id:"showProductDescription",label:"Show Descriptions",type:"toggle","default":!0},{id:"title",label:"Grid Title",type:"text","default":"Products"}]},{id:"carousel",title:"Carousel",icon:"http://pathtoicon.com/icon.png",category:"Content",directiveName:"carousel-widget",settings:[{id:"images",label:"Images",type:"image-multi","default":[{imageUrl:"http://design51.volusion.com/v/vspfiles/photos/homepage/1416874443909.jpg",linkUrl:"/p/picture-frame",alt:"Picture Frame"},{imageUrl:"http://design51.volusion.com/v/vspfiles/photos/homepage/1416875566619.jpg",linkUrl:"/p/3-drawer-chest",alt:"Drawer"},{imageUrl:"http://design51.volusion.com/v/vspfiles/photos/homepage/1416874482014.jpg",linkUrl:"/p/decorative-pillows",alt:"Pillows"}]},{id:"animation",label:"Animation",type:"dropdown",values:["Fade","Slide"],defaults:"Fade"},{id:"speed",label:"Speed",type:"dropdown",values:[2e3,4e3,6e3],"default":4e3},{id:"dots",label:"Dots",type:"toggle","default":!0},{id:"arrows",label:"Arrows",type:"toggle","default":!1},{id:"autoplay",label:"Autoplay",type:"toggle","default":!0},{id:"infinite",label:"infinite",type:"toggle","default":!0},{id:"slidesInView",label:"slidesInView",type:"integer","default":1},{id:"slidesToScroll",label:"slidesToScroll",type:"integer","default":1}]}]}),function(){function e(e){function t(t,n,i,o){var r,s=e(n[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});n.addClass("acme-malarkey"),angular.forEach(t.extraValues,function(e){s.type(e).pause()["delete"]()}),r=t.$watch("vm.contributors",function(){angular.forEach(o.contributors,function(e){s.type(e.login).pause()["delete"]()})}),t.$on("$destroy",function(){r()})}function n(e,t){function n(){return i().then(function(){e.info("Activated Contributors View")})}function i(){return t.getContributors(10).then(function(e){return o.contributors=e,o.contributors})}var o=this;o.contributors=[],n()}var i={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:t,controller:n,controllerAs:"vm"};return i}angular.module("vnext.widgets").directive("acmeMalarkey",e),e.$inject=["malarkey"]}(),function(){function e(){function e(e){var t=this;t.relativeDate=e(t.creationDate).fromNow()}var t={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:e,controllerAs:"vm",bindToController:!0};return t}angular.module("vnext.widgets").directive("acmeNavbar",e)}(),function(){function e(){function e(){}var t={restrict:"A",templateUrl:"product/product-widget.html",scope:{settings:"=",resolves:"=",reRender:"="},controller:e};return t}angular.module("vnext.widgets").directive("productWidget",e)}(),function(){function e(){var e={restrict:"A",templateUrl:"navigation/navigation-widget.html",scope:{settings:"="}};return e}angular.module("vnext.widgets").directive("navigationWidget",e)}(),function(){function e(){var e={restrict:"A",templateUrl:"productList/product-list-widget.html",scope:{settings:"=",resolves:"=",reRender:"="}};return e}angular.module("vnext.widgets").directive("productListWidget",e)}(),function(){angular.module("vnext.widgets").directive("socialWidget",["vnAdminStoreInfo",function(e){return{restrict:"A",templateUrl:"socialWidget/social-widget.html",scope:{settings:"="},link:function(t){e.getInfo().then(function(e){console.log(e),t.social=e[0].socialNetworks},function(e){console.log(e)})}}}])}(),function(){function e(){var e={restrict:"A",replace:!0,templateUrl:"siteTitle/site-title.html",scope:{settings:"="},controller:["$scope",function(){}]};return e}angular.module("vnext.widgets").directive("siteTitleWidget",e)}(),function(){function e(){var e={restrict:"A",templateUrl:"video/video-widget.html",scope:{settings:"="}};return e}angular.module("vnext.widgets").directive("videoWidget",e)}(),function(){function e(){function e(){return t}var t=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Angular UI Bootstrap",url:"http://angular-ui.github.io/bootstrap/",description:"Bootstrap components written in pure AngularJS by the AngularUI Team.",logo:"ui-bootstrap.png"},{title:"Less",url:"http://lesscss.org/",description:"Less extends the CSS language, adding features that allow variables, mixins, functions and many other techniques.",logo:"less.png"}];
this.getTec=e}angular.module("vnext.widgets").service("webDevTec",e)}();