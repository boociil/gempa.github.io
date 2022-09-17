showPosts = function() {
console.log("bb");
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      var parser = new DOMParser();
      var xmlDoc = parser.parseFromString(xhttp.responseText, 'text/xml');
      var posts = '';
      item = xmlDoc.getElementsByTagName('item');
      posts += '<ul>';
      for (i = 1; i < item.length; i++) {
        if (i % 3 == 0){
          posts += '<article class="rightcl"><a href="#"><img src="'+ $(item[i]).find('media\\:content') +'" alt=""/></a><h1>'+ $(item[i]).find('title').text() +'</h1><p>'+ $(item[i]).find('description').text() +'</p><a href="'+ $(item[i]).find('link').text() +'" target="_blank" class="readmore">Baca Selengkapnya</a></article>	';
        }else{
          posts += '<article><a href="#"><img src="'+ $(item[i]).find('media\\:content') +'" alt=""/></a><h1>'+ $(item[i]).find('title').text() +'</h1><p>'+ $(item[i]).find('description').text() +'</p><a href="'+ $(item[i]).find('link').text() +'" target="_blank" class="readmore">Baca Selengkapnya</a></article>	';   
        }
      }  
      posts += '</ul>';
      document.getElementById('blog-section').innerHTML = posts;
      window.location.hash = '#blog-section';
    }
  };
  xhttp.open('GET','https://mighty-badlands-24547.herokuapp.com/https://www.antaranews.com/rss/top-news', true);
  xhttp.send();
  return false;
  
};

showGempa = function () {

  var getJSON = function(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'json';
        xhr.onload = function() {
          var status = xhr.status;
            if (status === 200) {
              callback(null, xhr.response);
            } else {
              callback(status, xhr.response);
            }
        };
        xhr.send();
  };

  var posts = '';

  getJSON('https://mighty-badlands-24547.herokuapp.com/https://data.bmkg.go.id/DataMKG/TEWS/gempadirasakan.json',
  function(err, data) {
      if (err !== null) {
          alert('Something went wrong: ' + err);
      } else {
      posts += '<table><tr><th>No.</th><th>Tanggal</th><th>Jam</th><th>Lintang</th>	<th>Bujur</th><th>Magnitudo</th><th>Wilayah</th></tr>';
      for (i = 0; i < data.Infogempa.gempa.length; i++) {
              posts += '<tr><td>' + (i+1) + '</td>' +
              '<td>' + data.Infogempa.gempa[i].Tanggal + '</td>' +
              '<td>' + data.Infogempa.gempa[i].Jam + '</td>' + 
              '<td>' + data.Infogempa.gempa[i].Lintang + '</td>' +
              '<td>' + data.Infogempa.gempa[i].Bujur + '</td>' +
              '<td>' + data.Infogempa.gempa[i].Magnitude + '</td>' +
              '<td>' + data.Infogempa.gempa[i].Wilayah + '</td></tr>';
            } 				
      posts += '</table>';
      document.getElementById('table').innerHTML = posts;
      }
  });
}

showPostsCNN = function() {
  console.log("bb");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(xhttp.responseText, 'text/xml');
        var posts = '';
        item = xmlDoc.getElementsByTagName('item');
        posts += '<ul>';
        for (i = 1; i < item.length; i++) {
          if (i % 3 == 0){
            posts += '<article class="rightcl"><a href="#"><img src="'+ $(item[i]).find('media\\:content') +'" alt=""/></a><h1>'+ $(item[i]).find('title').text() +'</h1><p>'+ $(item[i]).find('description').text() +'</p><a href="'+ $(item[i]).find('link').text() +'" target="_blank" class="readmore">Baca Selengkapnya</a></article>	';
          }else{
            posts += '<article><a href="#"><img src="'+ $(item[i]).find('media\\:content') +'" alt=""/></a><h1>'+ $(item[i]).find('title').text() +'</h1><p>'+ $(item[i]).find('description').text() +'</p><a href="'+ $(item[i]).find('link').text() +'" target="_blank" class="readmore">Baca Selengkapnya</a></article>	';   
          }
        }  
        posts += '</ul>';
        document.getElementById('blog-section').innerHTML = posts;
        window.location.hash = '#blog-section';
      }
    };
    xhttp.open('GET','https://mighty-badlands-24547.herokuapp.com/https://www.cnnindonesia.com/nasional/rss', true);
    xhttp.send();
    return false;
    
  };

  showPostsJP = function() {
    console.log("bb");
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
          var parser = new DOMParser();
          var xmlDoc = parser.parseFromString(xhttp.responseText, 'text/xml');
          var posts = '';
          item = xmlDoc.getElementsByTagName('item');
          posts += '<ul>';
          for (i = 1; i < item.length; i++) {
            if (i % 3 == 0){
              posts += '<article class="rightcl"><a href="#"><img src="'+ $(item[i]).find('image').text() +'" alt=""/></a><h1>'+ $(item[i]).find('title').text() +'</h1><p>'+ $(item[i]).find('description').text() +'</p><a href="'+ $(item[i]).find('link').text() +'" target="_blank" class="readmore">Baca Selengkapnya</a></article>	';
            }else{
              posts += '<article><a href="#"><img src="'+ $(item[i]).find('media\\:content') +'" alt=""/></a><h1>'+ $(item[i]).find('title').text() +'</h1><p>'+ $(item[i]).find('description').text() +'</p><a href="'+ $(item[i]).find('link').text() +'" target="_blank" class="readmore">Baca Selengkapnya</a></article>	';   
            }
          }  
          posts += '</ul>';
          document.getElementById('blog-section').innerHTML = posts;
          window.location.hash = '#blog-section';
        }
      };
      xhttp.open('GET','https://mighty-badlands-24547.herokuapp.com/https://www.cnbcindonesia.com/market/rss/', true);
      xhttp.send();
      return false;
      
    };