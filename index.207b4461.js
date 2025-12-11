var a=document.querySelector("ul"),r=Array.from(a.children),e=function(a){return+a.replace(/\D/g,"")};r.map(function(a){var r=a.dataset,n=r.position,t=r.salary,o=r.age,i=e(t);return{name:a.innerText,position:n,salary:i,age:+o}}),r.sort(function(a,r){return e(r.dataset.salary)-e(a.dataset.salary)}),r.forEach(function(r){return a.appendChild(r)});
//# sourceMappingURL=index.207b4461.js.map
