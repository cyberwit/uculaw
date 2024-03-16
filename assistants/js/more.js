function openChat () {
  document.getElementById('container').classList.add('open');
}

function closeChat () {
  document.getElementById('container').classList.remove('open');
  document.querySelector('.list').classList.remove('close');
  document.querySelector('.chat').classList.add('close');
  document.getElementById('back').classList.add('hidden');
  
  closeDrawer();
}

function backChat () {
  document.querySelector('.list').classList.remove('close');
  document.querySelector('.chat').classList.add('close');
  document.getElementById('back').classList.add('hidden');
  document.querySelector('.header .title').textContent = 'Chat';
  
  closeDrawer();
}

function openDrawer () {
  document.querySelector('.drawer').classList.remove('close');
}

function closeDrawer () {
  document.querySelector('.drawer').classList.add('close');
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.conversation').forEach(function (conversation) {
    conversation.addEventListener('click', function () {
      document.querySelector('.list').classList.add('close');
      document.querySelector('.chat').classList.remove('close');
      document.getElementById('back').classList.remove('hidden');
      document.querySelector('.header .title').textContent = 'Title';
    });
  });
});

// Fire once
document.querySelectorAll('focus.auto-expand, textarea.auto-expand').forEach(item => {
  item.addEventListener('click', function (e) {
    if(e.currentTarget.dataset.triggered) return;
    e.currentTarget.dataset.triggered = true;
    var savedValue = this.value;
    this.value = '';
    this.baseScrollHeight = this.scrollHeight;
    this.value = savedValue;
  });
});

// Fire anytime
document.querySelectorAll('input.auto-expand, textarea.auto-expand').forEach(item => {
  item.addEventListener('input', function (e) {
    var minRows = this.getAttribute('data-min-rows') | 0;
    this.rows = minRows;
    rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 17);
    this.rows = minRows + rows;
    this.scrollTop = this.scrollHeight;
  });
});