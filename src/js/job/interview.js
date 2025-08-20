const interviewContainer = document.querySelector('.interview__container')
    , top = interviewContainer.querySelector('.job__top')
    , countEl = top.querySelector('strong')
    , contents = interviewContainer.querySelectorAll('.interview__content');

countEl.textContent = contents.length;