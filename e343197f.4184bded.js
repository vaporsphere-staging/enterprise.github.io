(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{102:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return d}));var o=a(2),r=a(6),n=(a(0),a(112)),i={id:"swarm-privacy",title:"Swarm specific privacy features",sidebar_label:"Swarm specific privacy features",slug:"/swarm-privacy",draft:!0},s={unversionedId:"swarm-privacy",id:"swarm-privacy",isDocsHomePage:!1,title:"Swarm specific privacy features",description:"As a decentralized peer-to-peer storage Swarm provides for unique opportunities described in this Whitepaper. By being cutting-edge technology Swarm presents certain challenges from the regulation perspective. When drafted and enacted, even the most contemporary laws like GDPR have not taken into account blockchain technology and smart contracts. As the experts and regulators worldwide are discussing the routes to apply current rules to these technologies we decided to share our opinion on these matters with regard to Swarm (Blockchain and the GDPR, n.d.).",source:"@site/docs/swarm-privacy.md",slug:"/swarm-privacy",permalink:"/docs/swarm-privacy",editUrl:"https://github.com/ethersphere/enterprise.github.io/edit/master/docs/swarm-privacy.md",version:"current",sidebar_label:"Swarm specific privacy features"},c=[],l={rightToc:c};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"As a decentralized peer-to-peer storage Swarm provides for unique opportunities described in this Whitepaper. By being cutting-edge technology Swarm presents certain challenges from the regulation perspective. When drafted and enacted, even the most contemporary laws like GDPR have not taken into account blockchain technology and smart contracts. As the experts and regulators worldwide are discussing the routes to apply current rules to these technologies we decided to share our opinion on these matters with regard to Swarm ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.zotero.org/google-docs/?f8QFg4"}),"(",Object(n.b)("em",{parentName:"a"},"Blockchain and the GDPR"),", n.d.)"),"."),Object(n.b)("p",null,"This section shall not be treated as legal advice, but should rather be seen as an invitation to review the decentralized peer-to-peer storages in general and Swarm, in particular, from a privacy perspective."),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Where the data is located? What rules are applicable to data being stored in Swarm?")),Object(n.b)("p",null,"Swarm is a decentralized storage, i.e. the data is stored by the independent nodes ",Object(n.b)("em",{parentName:"p"},"and")," no specific node stores all of the data put by a random person, except evidently the node uploading this data to Swarm and the nodes which will download this data by request","[1]",". When the data is uploaded to Swarm, it is split into chunks (parts of the file, 4Kb each) with each chunk being duplicated several times (to avoid loss of data due to potential unavailability of a specific node in a given time). Then all of these chunks are put on different nodes being chosen using the algorithm embedded in Swarm protocol. Every such node might be located in any country and the use of VPN connection might even hide the actual location of the node, even if we decide to check for it. However, as no node does contain the data in full","[2]"," one can\u2019t choose the law applicable for the personal data being stored on Swarm based on the location of nodes."),Object(n.b)("p",null,"Therefore, we believe that the law applicable to the specific data in Swarm should be chosen either depending on the nature of this data (e.g., personal data of the EU citizens is protected by the GDPR dependless on its location), or the person who puts this data to Swarm, or the person who gets access to the data in Swarm."),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"What about the cross-border transfer rules?")),Object(n.b)("p",null,"As we have already pointed out, currently cross-border transfers of personal data are a hot topic for companies dealing with the data of EU citizens. So this question is definitely on the board when a company considers the place where it stores personal data of its consumers, clients, employees etc."),Object(n.b)("p",null,"As mentioned above, the data being put on Swarm doesn\u2019t actually exist in any specific place/on any specific node/ in full, except for the node which uploaded this data to Swarm and the nodes which will download this data by request. Therefore, in our opinion, the mere fact that the data is uploaded to Swarm doesn\u2019t mean that the data has left the country where the uploader is located. Only if (and when) the person located in a third country gains access to this data using Swarm, the data might be treated as transferred to this third country. In our opinion, it means that use of Swarm doesn\u2019t entail mandatory cross-border transfer unless the company allows for downloading the data from Swarm using the nodes located in a different country."),Object(n.b)("p",null,"A separate note might be made for the processing of personal data governed by the laws with a localization rule (e.g., Russia, China, Kazakhstan)","[3][(*How to Comply with Data Localization Regulations amid COVID-19\u2019s Impact*, n.d.)]","(",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.zotero.org/google-docs/?LEkJYM"}),"https://www.zotero.org/google-docs/?LEkJYM"),"). We believe that uploading data into Swarm should not be treated as the violation of this rule as the data doesn\u2019t leave the country of its origin unless this company allows access to this data by somebody located in a different country. However, the actual answer to this question heavily depends on the intent and the wording of the specific regulations, so in every specific case one should consult with the local legal advisor."),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Are Swarm nodes the controllers/processors?")),Object(n.b)("p",null,"According to the GDPR the controller is the person who determines the purposes and means of the processing of personal data (GDPR Article 4(7) ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.zotero.org/google-docs/?YefPKK"}),"(",Object(n.b)("em",{parentName:"a"},"EUR-Lex - 32016R0679 - EN - EUR-Lex"),", n.d.)"),"). The processor is the person which processes personal data on behalf of the controller (GDPR Article 4(8) ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.zotero.org/google-docs/?Yg0EwP"}),"(",Object(n.b)("em",{parentName:"a"},"EUR-Lex - 32016R0679 - EN - EUR-Lex"),", n.d.)"),"). With regard to the blockchain actors there is a debate as to who is who when the personal data is processed using the blockchain (pages 17-18 ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.zotero.org/google-docs/?LHzhV3"}),"(",Object(n.b)("em",{parentName:"a"},"Blockchain and the GDPR\u202f: A Thematic Report"),", n.d.)"),")."),Object(n.b)("p",null,"Based on the definition of the \u201ccontroller\u201d it\u2019s difficult to believe that the Swarm nodes are the entities determining the purposes of processing of personal data, if it\u2019s uploaded to Swarm. In our view, the data controllers should rather be the uploaders who ask the uploading node to put certain personal data into Swarm","[4]","."),Object(n.b)("p",null,"The Swarm nodes\u2019 status as data processors may depend on the situation. The French data protection authority, Commission Nationale Informatique & Libert\xe9s (CNIL), has shared its opinion that the miners in a blockchain and even the smart contract developers may become the data processors in certain cases (pages 3-4 ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.zotero.org/google-docs/?F7dca7"}),"(",Object(n.b)("em",{parentName:"a"},"Blockchain and the GDPR"),", n.d.)"),"). We believe that the Swarm node uploading personal data by request of its client may be treated as the data processor. Similarly, if the Swarm node stores the personal data in a cleartext, i.e. one may reasonably decide that the stored data falls under the personal data definition, such a node should be treated as the data processor. In these cases the nodes shall either include the respective data protection provisions (GDPR Article 28(3) ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.zotero.org/google-docs/?XECRbc"}),"(",Object(n.b)("em",{parentName:"a"},"EUR-Lex - 32016R0679 - EN - EUR-Lex"),", n.d.)"),") into their agreements with clients (data controllers), or implement some technical safeguards preventing them from processing personal data at all."),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"What Swarm tools help the controllers to comply with the abovementioned GDPR requirements?")),Object(n.b)("p",null,"Swarm contains, in particular, the following tools enabling the controller, who decides to use Swarm as the storage of personal data, to comply with the GDPR requirements:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Blockchain for keeping records of processing activities, including permissioned, audited, logging access to the personal data stored in Swarm")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Apart from the general public and private blockchain network, permissioned blockchain provides an additional access control layer to allow specific actions to be carried out by identifiable participants. Unlike centralized log and audit systems, blockchain-based logging and auditing systems can reduce the overall storage consumption and improve its trust-worthy auditability with the immutable nature. At high-level, Swarm rewards popular contents and the unpopular contents could be potentially Garbage Collected. It may imply unpopular contents for audit purposes and may need other incentive schemes to be persisted. The experimental SMEAR (Secure Ways of Ensuring ARchival or SWarm Enforcement And Registration) contract allows nodes to register their public key to become accountable participants in the swarm by putting up a deposit. This contract provides an incentive to decrease the risk that the data will be lost, the owner may purchase storage promises from other nodes as a form of insurance.")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"\u201cGarbage collection\u201d tool for erasing, rectifying or restricting the processing of personal data by demand of the data subject")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"When files are uploaded to the Swarm Storage network, Swarm splits files into chunks and stores the chunk address in the Pin Index. Swarm also assumes that each of the Swarm nodes will allocate an appropriate percentage of chunks based on the storage pledged. If the storage node reaches to the pledged threshold, Swarm tries to Garbage Collect those least accessed chunks. Eventually these Garbage Collected chunks will disappear from the network. Therefore, data that is not accessed, eventually disappears from the network unless it\u2019s paid for by the data owner.")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("em",{parentName:"li"},"\u201cdream")," protocol\u201d (under development) for erasing, rectifying or restricting the processing of personal data by demand of the data subject")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Primitive property of Immutability implies cost of deletion and access revocation. Even with physical storage devices, removal of information is both unenforceable and impractical. A common assumption is that ordered information removal should make data inaccessible through typical precedent methods of access. The ",Object(n.b)("em",{parentName:"p"},"dream")," protocol describes five attributes of storage content access control in Swarm\u2019s implementation, and the protocol is built on top of DISC\u2019s API:"),Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"D"),"eniable - content uses the dream key as one time pad for decryption. Potentially multiple content chunks can use the same dream key, the key\u2019s association to any content must be deniable."),Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"R"),"evocable - access granted by the dream keys is revocable. Revoking access from all parties including oneself is considered deletion."),Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"E"),"xpirable - the dream key allows for one-time use only"),Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"A"),"ddressable - access can be granted to a neighbourhood within permitted storage network range"),Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"M"),"alleable - resilient to churn and dynamic network size change, must be reusable and upgradable across grantees")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Feeds data structure for rectifying the erroneous data")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"The standard way of maintaining the same pointer to data mutation is using Ethereum Name Service (ENS). However, ENS as an on-chain feature has a few technical limitations for our use-cases. For instance, any updates to ENS resolver will cost energy to execute on-chain; data change rate is bottlenecked by the new block mining rate; ENS resolution requires your node to be synced to the blockchain. Swarm Feeds provide an effective way to persist identifiers for mutable data without using ENS. It is also possible to use Swarm Feeds in combination with ENS when registering the initial feed manifest address , and the ENS key will always resolve to the latest Feed address.")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"How does Swarm allow for compliance with the data subject\u2019s right to erasure (\u201cright to be forgotten\u201d)?")),Object(n.b)("p",null,"Every data subject has a right to ask for erasure of his/her personal data in case the purpose of processing has been achieved, or there is no more need for the processing of this data. Currently the Swarm protocol includes \u201cgarbage collection\u201d procedure, which allows for deletion of the data being stored by the Swarm nodes in the following way:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Every node is motivated to support the Swarm protocol and store the data because it is paid for it.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"If the data owner (which is, by default, the person who puts the data into Swarm) stops paying for the storage of this data in Swarm, the Swarm nodes become demotivated to store it.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"So, this data is now marked as \u201cgarbage\u201d and should basically be replaced by the newer data received by said node for storage."))),Object(n.b)("p",null,"There are 3 main issues with this \u201cgarbage collection\u201d process from the privacy perspective:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"There is no control over the time needed for the \u201cgarbage\u201d data to be replaced by the new one. It depends on many factors which are relevant to each specific node.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"There is no way to guarantee that all the nodes will comply in full with this \u201cgarbage collection\u201d process.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"If somebody else decides to continue paying for the storage of this \u201cgarbage\u201d data, the process doesn\u2019t work."))),Object(n.b)("p",null,"Therefore, the work is in progress on a completely new protocol called ",Object(n.b)("em",{parentName:"p"},"dream")," intended to completely resolve this matter and provide for a verifiable way to delete the data from Swarm, if this data was uploaded to Swarm as \u201cdeletable\u201d."),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"How does Swarm allow for compliance with the data subject\u2019s right to rectification?")),Object(n.b)("p",null,"Currently Swarm only allows to replace the incorrect data by uploading new and correct data and stopping to pay for the old, incorrect data. Although it means that the issues are similar to the ones described re the right to erasure above, such an approach might be viewed as driving towards compliance with GDPR (page 9 ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.zotero.org/google-docs/?abgNfN"}),"(",Object(n.b)("em",{parentName:"a"},"Blockchain and the GDPR"),", n.d.)"),")."),Object(n.b)("p",null,"Implementation of the ",Object(n.b)("em",{parentName:"p"},"dream")," protocol should definitely help bring this question much closer to full compliance with GDPR."),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"How does Swarm allow for compliance with the data subject\u2019s right to restrict the processing?")),Object(n.b)("p",null,"The right to restrict the processing of personal data is intended to act as a quick tool to prevent violation of the data subject\u2019s right or minimize the consequences of such violation. However, currently Swarm can\u2019t help exercising this right if the data subject\u2019s personal data is put into Swarm - the main issue once again is with uncontrollable time of reaction of nodes to the \u201cgarbage collection\u201d process. We expect this situation to change as soon as the ",Object(n.b)("em",{parentName:"p"},"dream")," protocol is implemented, since it will allow for much quicker response from the nodes to the request by the data owner for the stop of the personal data processing."))}d.isMDXComponent=!0},112:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var o=a(0),r=a.n(o);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(a),b=o,u=p["".concat(i,".").concat(b)]||p[b]||h[b]||n;return a?r.a.createElement(u,s(s({ref:t},l),{},{components:a})):r.a.createElement(u,s({ref:t},l))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<n;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);