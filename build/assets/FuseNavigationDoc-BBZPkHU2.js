import{_ as j,d4 as N,d5 as E,aW as P,ai as x,as as C,d6 as B,d7 as D,a_ as p,u as M,d as l,j as t,T as i,d3 as d,o as m,aH as R}from"./index-Dboj72Vj.js";import{F as f}from"./FuseNavItemModel-CqfJ-BsX.js";class h{static selectById(o,a){for(let n=0;n<o.length;n+=1){const e=o[n];if(e.id===a)return e;if(e.children){const r=this.selectById(e.children,a);if(r)return r}}}static appendNavItem(o,a,n=null){return n?o.map(e=>{if(e.id===n){const r={...e};return r.children=[...e.children||[],a],r}return e.children?{...e,children:this.appendNavItem(e.children,a,n)}:{...e}}):[...o,a]}static prependNavItem(o,a,n=null){return n?o.map(e=>{if(e.id===n){const r={...e};return r.children=[a,...e.children||[]],r}return e.children?{...e,children:this.prependNavItem(e.children,a,n)}:{...e}}):[a,...o]}static filterNavigationByPermission(o,a){return o.reduce((n,e)=>{const r=e.children?this.filterNavigationByPermission(e.children,a):[];if(this.hasPermission(e.auth,a)||r.length){const c={...e};c.children=r.length?r:void 0,n.push(c)}return n},[])}static removeNavItem(o,a){return o.reduce((n,e)=>(e.id!==a&&(e.children?n.push({...e,children:this.removeNavItem(e.children,a)}):n.push(e)),n),[])}static updateNavItem(o,a,n){return o.map(e=>e.id===a?j.merge({},e,n):e.children?{...e,children:this.updateNavItem(e.children,a,n)}:e)}static getFlatNavigation(o=[],a=[]){for(let n=0;n<o.length;n+=1){const e=o[n];if(e.type==="item"){const r=f(e);a.push(r)}(e.type==="collapse"||e.type==="group")&&e.children&&this.getFlatNavigation(e.children,a)}return a}static hasPermission(o,a){return o==null?!0:o.length===0?!a||a.length===0:a&&Array.isArray(o)&&Array.isArray(a)?o.some(n=>a.indexOf(n)>=0):o.includes(a)}static flattenNavigation(o,a=""){return o.flatMap((n,e)=>{var v;const r=a?`${a}.${e+1}`:`${e+1}`;let c=[{...n,order:r,children:(v=n.children)==null?void 0:v.map(S=>S.id)}];return n.children&&(c=c.concat(this.flattenNavigation(n.children,r))),c})}static unflattenNavigation(o){const a={};o.forEach(e=>{a[e.id]={...e,children:[]}});const n=[];return o.forEach(e=>{if(e.order.includes(".")){const r=e.order.substring(0,e.order.lastIndexOf(".")),c=o.find(v=>v.order===r);c&&a[c.id].children.push(a[e.id])}else n.push(a[e.id])}),n.map(e=>{const{...r}=e;return r})}}const T={APPLICATIONS:"تطبيقات",DASHBOARDS:"لوحات",CALENDAR:"التقويم",ECOMMERCE:"التجارة الإلكترونية",ACADEMY:"الأكاديمية",MAIL:"بريد",TASKS:"لكى يفعل",FILE_MANAGER:"مدير الملفات",CONTACTS:"جهات الاتصال",MESSENGER:"ماسنجر",SCRUMBOARD:"مجلس",NOTES:"ملاحظات"},_={APPLICATIONS:"Applications",DASHBOARDS:"Dashboards",CALENDAR:"Calendar",ECOMMERCE:"E-Commerce",ACADEMY:"Academy",MAIL:"Mail",TASKS:"Tasks",FILE_MANAGER:"File Manager",CONTACTS:"Contacts",MESSENGER:"Messenger",SCRUMBOARD:"Scrumboard",NOTES:"Notes"},O={APPLICATIONS:"Programlar",DASHBOARDS:"Kontrol Paneli",CALENDAR:"Takvim",ECOMMERCE:"E-Ticaret",ACADEMY:"Akademi",MAIL:"Posta",TASKS:"Yapılacaklar",FILE_MANAGER:"Dosya Yöneticisi",CONTACTS:"Kişiler",MESSENGER:"Sohbet",SCRUMBOARD:"Proje",NOTES:"Notlar"};N.addResourceBundle("en","navigation",_);N.addResourceBundle("tr","navigation",O);N.addResourceBundle("ar","navigation",T);const U=[{id:"apps.mailbox",title:"Mailbox",type:"item",icon:"heroicons-outline:mail",url:"/apps/mailbox",translate:"MAIL",badge:{title:"27",classes:"px-8 bg-pink-600 text-white rounded-full"}}],b=E(),w=b.getInitialState([]),I=b.upsertMany(w,h.flattenNavigation(U)),A=(s,o)=>async(a,n)=>{const e=n(),r=h.unflattenNavigation(u(e));return a(g(h.appendNavItem(r,f(s),o))),Promise.resolve()},k=(s,o)=>async(a,n)=>{const e=n(),r=h.unflattenNavigation(u(e));return a(g(h.prependNavItem(r,f(s),o))),Promise.resolve()},F=(s,o)=>async(a,n)=>{const e=n(),r=h.unflattenNavigation(u(e));return a(g(h.updateNavItem(r,s,o))),Promise.resolve()},L=s=>async(o,a)=>{const n=a(),e=h.unflattenNavigation(u(n));return o(g(h.removeNavItem(e,s))),Promise.resolve()},{selectAll:u,selectIds:q,selectById:H}=b.getSelectors(s=>s.navigation),y=P({name:"navigation",initialState:I,reducers:{setNavigation(s,o){return b.setAll(s,h.flattenNavigation(o.payload))},resetNavigation:()=>I}});x.inject(y);y.injectInto(x);const{setNavigation:g,resetNavigation:G}=y.actions,W=C([u,B,D],(s,o)=>{const a=h.unflattenNavigation(s);function n(r){return r==null?void 0:r.map(c=>({hasPermission:!!p.hasPermission(c==null?void 0:c.auth,o),...c,...c!=null&&c.translate&&(c!=null&&c.title)?{title:N.t(`navigation:${c==null?void 0:c.translate}`)}:{},...c!=null&&c.children?{children:n(c==null?void 0:c.children)}:{}}))}return n(a)});C([W],s=>h.flattenNavigation(s));y.reducer;function K(){const s=M();return l(R,{children:[t(i,{variant:"h4",className:"mb-40 font-700",children:"FuseNavigation"}),l(i,{className:"mb-16",component:"p",children:[t("code",{children:"FuseNavigation"})," is a custom-built Fuse component that allows you to create a multi-level collapsable navigation."]}),t(i,{className:"text-16 mt-16 mb-10 font-700",variant:"h6",children:"[navigation]"}),l(i,{className:"mb-16",component:"p",children:[t("code",{children:"FuseNavigation"})," uses an array to populate the entire navigation. It supports four different navigation items; Group, Collapse, Item. and Divider. These items can be mixed and matched to create unique and complex navigation layouts."]}),t(i,{className:"text-16 mt-16 mb-10 font-700",variant:"h6",children:"[layout]"}),t(i,{className:"mb-16",component:"p",children:'"vertical" or "horizontal" layout options.'}),t(i,{className:"text-16 mt-16 mb-10 font-700",variant:"h6",children:"[active]"}),l(i,{className:"mb-16",component:"p",children:["You can set ",t("b",{children:"active"}),' to "square" to use square active item style instead of rounded/circle for'," ",t("b",{children:"vertical layout"}),"."]}),t(i,{className:"text-16 mt-16 mb-10 font-700",variant:"h6",children:"[dense]"}),l(i,{className:"mb-16",component:"p",children:["You can use ",t("b",{children:"dense={true}"})," to set dense variation of the navigation."]}),t(i,{className:"text-16 mt-16 mb-10 font-700",variant:"h6",children:"[checkPermission]"}),l(i,{className:"mb-16",component:"p",children:["You can use ",t("b",{children:"checkPermission={true}"})," to enable authorization for navigation."]}),t(i,{className:"text-20 mt-20 mb-10 font-700",variant:"h5",children:"Usage"}),t(d,{component:"pre",className:"language-jsx",children:`
                                    <FuseNavigation navigation={navigation} layout="vertical" active="square" dense={true}/>
                                `}),t(i,{className:"mt-48 mb-8",variant:"h4",children:"Navigation item types"}),t(i,{className:"mt-32 p-8 rounded-4 bg-yellow-100 border-1 border-yellow-700 text-black mb-8",children:"It is mandatory to give a unique id to all of your navigation items."}),t(i,{className:"text-16 mt-16 mb-10 font-700",variant:"h6",children:"Group"}),t(d,{component:"pre",className:"language-json",children:`
              {
                id: 'apps',
                title: 'Applications',
                subtitle: 'Custom made application designs',
                type: 'group',
                icon: 'heroicons-outline:home',
                children: [
                  {
                    id: 'apps.academy',
                    title: 'Academy',
                    type: 'item',
                    icon: 'heroicons-outline:academic-cap',
                    url: '/apps/academy',
                  }
                ]
             }
        `}),t(i,{className:"text-16 mt-16 mb-10 font-700",variant:"h6",children:"Collapse"}),t(d,{component:"pre",className:"language-json",children:`
            {
                id: 'apps.ecommerce',
                title: 'ECommerce',
                type: 'collapse',
                icon: 'heroicons-outline:shopping-cart',
                children: [
                  {
                    id: 'e-commerce-products',
                    title: 'Products',
                    type: 'item',
                    url: 'apps/e-commerce/products',
                    end: true,
                  },
              ]
            }
      `}),t(i,{className:"text-16 mt-16 mb-10 font-700",variant:"h6",children:"Item"}),t(d,{component:"pre",className:"language-json",children:`
           {
              id: 'dashboards.project',
              title: 'Project',
              type: 'item',
              icon: 'heroicons-outline:clipboard-check',
              url: '/dashboards/project',
            }
        `}),t(i,{className:"text-20 mt-24 mb-8 font-medium",component:"h2",children:"end: bool"}),t(i,{className:"text-16 mb-8",component:"h2",children:"When true, the active class/style will only be applied if the location is exactly matched."}),t(d,{component:"pre",className:"language-json",children:`
          {
              id: 'dashboards.project',
              title: 'Project',
              type: 'item',
              icon: 'heroicons-outline:clipboard-check',
              url: '/dashboards/project',
              end: true
          }
                                `}),t(i,{className:"text-16 mt-16 mb-10 font-700",variant:"h6",children:"Link"}),t(d,{component:"pre",className:"language-json",children:`
            {
                'id'    : 'test-link',
                'title' : 'Test Link',
                'type'  : 'link',
                'icon'  : 'link',
                'url'   : 'http://fusetheme.com',
                'target': '_blank'
            },
         `}),t(i,{className:"text-16 mt-16 mb-10 font-700",variant:"h6",children:"Divider"}),t(d,{component:"pre",className:"language-json",children:`
          {
              'id'   : 'project',
              'title': 'Project',
              'type' : 'item',
              'url'  : '/apps/dashboards/project'
          }
          {
              'type': 'divider
          },
          {
              'id'   : 'project',
              'title': 'Project',
              'type' : 'item',
              'url'  : '/apps/dashboards/project'
          }
          `}),t(i,{className:"mt-48 mb-8",variant:"h4",children:"Actions"}),t(i,{className:"text-16 mt-16 mb-10 font-700",variant:"h6",children:"setNavigation"}),l(i,{className:"text-16 mb-8",component:"h2",children:["Use ",l("code",{children:["setNavigation(navigation","<Array>",")"]})," action to set/change whole navigation."]}),l("div",{className:"border-1 rounded-16 p-16 my-16",children:[t(i,{className:"text-16 mb-24",component:"h2",children:"With the button below, whole navigation is changed."}),t(m,{onClick:()=>{s(g([{id:"dashboards",title:"Dashboards",subtitle:"Unique dashboard designs",type:"group",icon:"heroicons-outline:home",children:[{id:"dashboards.project",title:"Project",type:"item",icon:"heroicons-outline:clipboard-check",url:"/dashboards/project"},{id:"dashboards.analytics",title:"Analytics",type:"item",icon:"heroicons-outline:chart-pie",url:"/dashboards/analytics"}]},{id:"auth",title:"Auth",type:"group",icon:"verified_user",children:[{id:"sign-out",title:"Sign out",type:"item",url:"sign-out",icon:"exit_to_app"}]}]))},variant:"contained",color:"secondary",children:"Set Navigation"}),t(d,{component:"pre",className:"language-jsx mt-24",children:`
          <Button
            onClick={() => {
              dispatch(
                setNavigation([
                  {
                    id: 'dashboards',
                    title: 'Dashboards',
                    subtitle: 'Unique dashboard designs',
                    type: 'group',
                    icon: 'heroicons-outline:home',
                    children: [
                      {
                        id: 'dashboards.project',
                        title: 'Project',
                        type: 'item',
                        icon: 'heroicons-outline:clipboard-check',
                        url: '/dashboards/project',
                      },
                      {
                        id: 'dashboards.analytics',
                        title: 'Analytics',
                        type: 'item',
                        icon: 'heroicons-outline:chart-pie',
                        url: '/dashboards/analytics',
                      },
                    ],
                  },
                  {
                    id: 'auth',
                    title: 'Auth',
                    type: 'group',
                    icon: 'verified_user',
                    children: [
                      {
                        id: 'sign-out',
                        title: 'Sign out',
                        type: 'item',
                        url: 'sign-out',
                        icon: 'exit_to_app',
                      },
                    ],
                  },
                ])
              );
            }}
            variant="contained"
            color="secondary"
          >
            Set Navigation
          </Button>
        `})]}),t(i,{className:"text-16 mt-16 mb-10 font-700",variant:"h6",children:"resetNavigation"}),l(i,{className:"text-16 mb-8",component:"h2",children:["Use ",t("code",{children:"resetNavigation()"})," action to reset navigation to initial state."]}),l("div",{className:"border-1 rounded-16 p-16 my-16",children:[t(i,{className:"text-16 mb-24",component:"h2",children:"With the button below, navigation is returned to config defaults."}),t(m,{onClick:()=>{s(G())},variant:"contained",color:"secondary",children:"Reset Navigation"}),t(d,{component:"pre",className:"language-jsx mt-24",children:`
            <Button
                onClick={()=> {
                    dispatch(resetNavigation());
                }}
                variant="contained"
                color="secondary"
            >
                Reset Navigation
            </Button>
            `})]}),t(i,{className:"text-16 mt-16 mb-10 font-700",variant:"h6",children:"updateNavigationItem"}),l(i,{className:"text-16 mb-8",component:"h2",children:["Use",l("code",{children:["updateNavigationItem(id, ",t("i",{children:"object"}),")"]}),"action to update a navigation item."]}),l("div",{className:"border-1 rounded-16 p-16 my-16",children:[t(i,{className:"text-16 mb-24",component:"h2",children:"With clicking the button below, a badge will be added into the 'Project' dashboard navigation item."}),t(m,{onClick:()=>{s(F("dashboards.project",{badge:{title:"NEW"}}))},variant:"contained",color:"secondary",children:"Update Navigation Item"}),t(d,{component:"pre",className:"language-jsx mt-24",children:`
					<Button
						onClick={() => {
							dispatch(
								updateNavigationItem('dashboards.project', {
									badge: {
										title: 'NEW'
									}
								})
							);
						}}
						variant="contained"
						color="secondary"
					>
						Update Navigation Item
					</Button>
					
        `})]}),t(i,{className:"text-16 mt-16 mb-10 font-700",variant:"h6",children:"removeNavigationItem"}),l(i,{className:"text-16 mb-8",component:"h2",children:["Use ",t("code",{children:"removeNavigationItem(id)"})," action to remove a navigation item."]}),l("div",{className:"border-1 rounded-16 p-16 my-16",children:[t(i,{className:"text-16 mb-24",component:"h2",children:'With the button below, "Calendar" navigation item is removed.'}),t(m,{onClick:()=>{s(L("apps.calendar"))},variant:"contained",color:"secondary",children:"Remove Navigation Item"}),t(d,{component:"pre",className:"language-jsx mt-24",children:`
            <Button
                  onClick={()=> {
                      dispatch(removeNavigationItem('apps.calendar'))
                  }}
                  variant="contained"
                  color="secondary"
            >
            Remove Navigation Item
            </Button>
      `})]}),t(i,{className:"text-16 mt-16 mb-10 font-700",variant:"h6",children:"prependNavigationItem"}),l(i,{className:"text-16 mb-8",component:"h2",children:["Use",l("code",{children:["prependNavigationItem(",t("i",{children:"object"}),", ",t("i",{children:"collapseId/groupId"}),"?)"]}),"action to prepend a navigation item into the navigation array."]}),l("div",{className:"border-1 rounded-16 p-16 my-16",children:[t(i,{className:"text-16 mb-24",component:"h2",children:'With the button below, "fusetheme.com" navigation item is added at the top of the navigation array.'}),t(m,{onClick:()=>{s(k({id:`test-link-${p.generateGUID()}`,title:"fusetheme.com",type:"link",icon:"link",url:"http://fusetheme.com",target:"_blank"}))},variant:"contained",color:"secondary",children:"Prepend Navigation Item"}),t(d,{component:"pre",className:"language-jsx mt-24",children:`
            <Button
                onClick={()=> {
                    dispatch(prependNavigationItem(
                        {
                            'id'    : 'test-link',
                            'title' : 'fusetheme.com',
                            'type'  : 'link',
                            'icon'  : 'link',
                            'url'   : 'http://fusetheme.com',
                            'target': '_blank'
                        }
                    ))
                }}
                variant="contained"
                color="secondary"
            >
                Prepend Navigation Item
            </Button>
            `})]}),l("div",{className:"border-1 rounded-16 p-16 my-16",children:[t(i,{className:"text-16 mb-24",component:"h2",children:'With the button below, "fusetheme.com" navigation item is added into the top of the "Dashboards" children.'}),t(m,{onClick:()=>{s(k({id:`test-link-${p.generateGUID()}`,title:"fusetheme.com",type:"link",icon:"link",url:"http://fusetheme.com",target:"_blank"},"dashboards"))},variant:"contained",color:"secondary",children:"Prepend Navigation Item"}),t(d,{component:"pre",className:"language-jsx mt-24",children:`
                                <Button
                                    onClick={()=> {
                                        dispatch(prependNavigationItem(
                                            {
                                                'id'    : 'test-link',
                                                'title' : 'fusetheme.com',
                                                'type'  : 'link',
                                                'icon'  : 'link',
                                                'url'   : 'http://fusetheme.com',
                                                'target': '_blank'
                                            }, 'dashboards'
                                        ))
                                    }}
                                    variant="contained"
                                    color="secondary"
                                >
                                    Prepend Navigation Item
                                </Button>
                                `})]}),t(i,{className:"text-16 mt-16 mb-10 font-700",variant:"h6",children:"appendNavigationItem"}),l(i,{className:"text-16 mb-8",component:"h2",children:["Use",l("code",{children:["appendNavigationItem(",t("i",{children:"object"}),", ",t("i",{children:"collapseId/groupId"}),"?)"]}),"action to append a navigation item into the navigation array."]}),l("div",{className:"border-1 rounded-16 p-16 my-16",children:[t(i,{className:"text-16 mb-24",component:"h2",children:'With the button below, "fusetheme.com" navigation item is added at the bottom of the array.'}),t(m,{onClick:()=>{s(A({id:`test-link-${p.generateGUID()}`,title:"fusetheme.com",type:"link",icon:"link",url:"http://fusetheme.com",target:"_blank"}))},variant:"contained",color:"secondary",children:"Append Navigation Item"}),t(d,{component:"pre",className:"language-jsx mt-24",children:`
            <Button
                onClick={()=> {
                    dispatch(appendNavigationItem(
                        {
                            'id'    : 'test-link',
                            'title' : 'fusetheme.com',
                            'type'  : 'link',
                            'icon'  : 'link',
                            'url'   : 'http://fusetheme.com',
                            'target': '_blank'
                        }
                    ))
                }}
                variant="contained"
                color="secondary"
            >
                Append Navigation Item
            </Button>
            `})]}),l("div",{className:"border-1 rounded-16 p-16 my-16",children:[t(i,{className:"text-16 mb-24",component:"h2",children:'With the button below, "fusetheme.com" navigation item is added into the bottom of the "Dashboards" children.'}),t(m,{onClick:()=>{s(A({id:`test-link-${p.generateGUID()}`,title:"fusetheme.com",type:"link",icon:"link",url:"http://fusetheme.com",target:"_blank"},"dashboards"))},variant:"contained",color:"secondary",children:"Append Navigation Item"}),t(d,{component:"pre",className:"language-jsx mt-24",children:`
                                <Button
                                    onClick={()=> {
                                        dispatch(appendNavigationItem(
                                            {
                                                'id'    : 'test-link',
                                                'title' : 'fusetheme.com',
                                                'type'  : 'link',
                                                'icon'  : 'link',
                                                'url'   : 'http://fusetheme.com',
                                                'target': '_blank'
                                            }, 'dashboards'
                                        ))
                                    }}
                                    variant="contained"
                                    color="secondary"
                                >
                                    Append Navigation Item
                                </Button>
                                `})]})]})}export{K as default};
