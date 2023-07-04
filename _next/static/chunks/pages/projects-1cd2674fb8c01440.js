(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{9182:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return s(4746)}])},8396:function(e,t,s){"use strict";s.d(t,{Z:function(){return o}});var n=s(5893),a=s(9008),i=s.n(a),r=s(1163);function o(e){var t=(0,r.useRouter)(),s=e.title?e.title+" | LMSYS Org":"LMSYS Org",a=e.desc?e.desc:"LMSYS Org, Large Model Systems Organization, is an organization missioned to democratize the technologies underlying large models and their system infrastructures.",o=e.image?e.image:"/social.png",c=e.alt?e.alt:"The text: LLMSYS Org, Large Model Systems Organization.",l=e.slug?e.slug:t.route;return(0,n.jsxs)(i(),{children:[(0,n.jsx)("title",{children:s}),(0,n.jsx)("meta",{name:"title",content:s}),(0,n.jsx)("meta",{property:"og:title",content:s}),(0,n.jsx)("meta",{name:"twitter:title",content:s}),(0,n.jsx)("meta",{name:"description",content:a}),(0,n.jsx)("meta",{property:"og:description",content:a}),(0,n.jsx)("meta",{name:"twitter:description",content:a}),(0,n.jsx)("meta",{property:"og:image",content:"https://lmsys.org"+o}),(0,n.jsx)("meta",{name:"twitter:image",content:"https://lmsys.org"+o}),(0,n.jsx)("meta",{name:"twitter:image:alt",content:c}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:url",content:"https://lmsys.org"+l}),(0,n.jsx)("meta",{name:"twitter:url",content:"https://lmsys.org"+l}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,n.jsx)("meta",{name:"theme-color",content:"#1d1d1f"}),(0,n.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon.jpeg"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.jpeg",type:"image/jpg"})]})}},4746:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return c}});var n=s(5893),a=s(8396),i=s(1664),r=s.n(i),o=JSON.parse('[{"name":"Models","entries":[{"name":"Vicuna","architecture":"Base: LLaMA","size":"Size: 7B, 13B, 33B","desc":"An open-source chatbot impressing GPT-4 with 90%* ChatGPT quality.","link":"/blog/2023-03-30-vicuna"},{"name":"LongChat","architecture":"Base: LLaMA","size":"Size: 7B, 13B","desc":"A series of open-source chatbots with 16K context length.","link":"/blog/2023-06-29-longchat"},{"name":"FastChat-T5","architecture":"Base: Flan-T5","size":"Size: 3B","desc":"A commercial-friendly, compact, yet powerful chat assistant fine-tuned from Flan-T5.","link":"https://github.com/lm-sys/FastChat#fastchat-t5"}]},{"name":"Evaluation","entries":[{"name":"Chatbot Arena","architecture":"","size":"","desc":"A benchmark platform for large language models (LLMs) that features anonymous, randomized battles in a crowdsourced manner. It comes with a leaderboard based on Elo ratings.","link":"https://arena.lmsys.org/"},{"name":"MT-Bench","architecture":"","size":"","desc":"A set of challenging, multi-turn, and open-ended questions for evaluating chat assistants. Strong LLMs like GPT-4 act as judges and assess the quality of the models\' responses as a proxy of human raters.","link":"https://github.com/lm-sys/FastChat/tree/main/fastchat/llm_judge"},{"name":"LongEval","architecture":"","size":"","desc":"A test suite for evaluating the long-context understanding ability of chatbots","link":"https://github.com/DachengLi1/LongChat"}]},{"name":"Systems","entries":[{"name":"FastChat","architecture":"","size":"","desc":"An open and scalable platform for training, finetuning, serving, and evaluating LLM-based chatbots.","link":"https://github.com/lm-sys/FastChat"}]}]');function c(){return(0,n.jsxs)("div",{className:"w-full flex justify-center py-5 pt-16 md:pt-5",children:[(0,n.jsx)(a.Z,{title:"Projects",desc:"LMSYS Org develops open datasets, models, systems, and evaluation tools for large models."}),(0,n.jsxs)("div",{className:"container px-5",children:[(0,n.jsx)("h1",{className:"text-7xl md:text-8xl font-bold",children:"PROJECTS"}),(0,n.jsx)("div",{className:"text-2xl pb-4",children:"LMSYS Org develops open datasets, models, systems, and evaluation tools for large models."}),(0,n.jsx)("hr",{className:"mb-5 mt-2 md:hidden"}),o.map((function(e,t){return(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:"pb-4 "+(0===t?"pt-0":"pt-5"),children:e.name.toUpperCase()}),(0,n.jsx)("div",{className:"grid gap-5 grid-cols-2",children:e.entries.map((function(e,t){return"/"===e.link.charAt(0)?(0,n.jsx)("a",{href:e.link,className:"no-underline "+(void 0===e.desc?"col-span-1":"col-span-2"),children:(0,n.jsx)(r(),{href:e.link,children:(0,n.jsx)(l,{item:e})},t)},e.link):(0,n.jsx)("a",{href:e.link,rel:"noopener noreferrer",target:"_blank",className:"no-underline "+(void 0===e.desc?"col-span-1":"col-span-2"),children:(0,n.jsx)(l,{item:e})},t)}))})]},t)}))]})]})}function l(e){var t=e.item;return(0,n.jsxs)("div",{className:" bg-sky text-paper border border-paper hover:bg-paper hover:text-sky cursor-pointer transition-colors p-5 shadow-lg shadow-neutral-800/20 flex flex-col sm:flex-row ",children:[(0,n.jsxs)("div",{className:void 0!==t.desc&&"basis-1/4",children:[(0,n.jsx)("p",{className:"text-2xl",children:t.name}),(0,n.jsx)("p",{className:"text-sm",children:t.architecture}),(0,n.jsx)("p",{className:"text-sm",children:t.size})]}),(0,n.jsx)("hr",{className:"mt-4 mb-4 sm:hidden "+(void 0===t.desc&&"hidden")}),(0,n.jsx)("div",{className:"text-lg basis-3/4 "+(void 0===t.desc&&"hidden"),children:t.desc})]})}},9008:function(e,t,s){e.exports=s(3121)},1163:function(e,t,s){e.exports=s(880)}},function(e){e.O(0,[774,888,179],(function(){return t=9182,e(e.s=t);var t}));var t=e.O();_N_E=t}]);