hexo.extend.tag.register('buttonlink', (args) => {

  
  let text = args[0];
  let link = args[1];

  return `
  <a href="${link}" class="waves-effect waves-teal btn-flat teal-text">
    ${text}
  </a>
  `
});