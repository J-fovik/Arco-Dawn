const n=e=>e&&/^1[3-9][0-9]{9}$/.test(e),r=e=>e&&/^[a-zA-Z]+$/.test(e),i=e=>{if(!e)return!1;if(/^\d+$/.test(e)){const t=parseInt(e,10);if(t>0&&t<=1e3)return!0}return!1};export{i as a,r as e,n as p};
