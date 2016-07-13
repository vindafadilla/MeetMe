BUKA CMD/terminal, JALANKAN COMMAND

npm install
bower install

FOKUS KE FOLDER /src
==========================================================================================

deskripsi setiap folder
----------------------------------------------
app -> source code
assets -> img dll
index.html > jangan di edit, sudah di otomatisasi dengan yeoman
	     otomatis akan include file *.js, *.css yang ada di folder app 
==========================================================================================

deskripsi folder /app
----------------------------------------------
FOLDER COMPONENTS
Berisi custom directive yang di buat, setiap directive membutuhkan 3 file, (*.directive.js, *.html, *.scss)

CONTOH membuat directive Footer
footer.directive.js =  pendefinisian directive
footer.html = detail content tag directive
footer.scss = styling untuk directive footer ini(jika ada)
----------------------------------------------

FOLDER STYLE
desc = styling untuk bootstrap, tidak utk di edit
----------------------------------------------

FOLDER di luar, contoh : main, settings, timeoptons <<<<< yang akan menjadi halaman
per halaman membutuhkan 3 file, ( *.controller.js, *.html, *.scss )

CONTOH halaman settings

settings.controllers.js = berisi data-data atau method yang di gunakan untuk view (*.html)
	setiap atribut atau method wajib di awali dengan prefix vm, standarisasi dari perjanjian vm = view model
	contoh : vm.nama = "jhon"; 
		vm.listMhs = [
			{nama: "hanif"},
			{nama: "ibrahim"},
			{nama: "hanifibram"},			
		]
		vm.changed = function(){
			//some expression
		}


settings.html = tampilan/view. untuk menggunakan atribut/method dari controller, gunakan prefix controllers alias (di jelaskan di step selanjutnya)
	contoh : {{settings.nama}} <<<<<<<  settings adalah controller alias, nama adalah atribut pada controller 

settings.scss = berisi css untuk halaman pada view (ex: settings.html)

==========================================================================================
ROUTING, pindah halaman secara asinkronus,
buka file app/index.route.js

.when('/settings',{ // ketika url membuka halaman localhost:8080/*/settings
        templateUrl: 'app/settings/settings.html', // akan membuka template ini
        controller: 'SettingsController', // dengan menggunakan controller ini
        controllerAs: 'settings' // controller di misalkan menjadi ini, di gunakan pada saat pemanggilan atribut/method pada view, contoh di atas
      })

==========================================================================================

KESIMPULAN
untuk membuat halaman, buat folder baru di folder /app, misal dashboard
buat 3 file, dashboard.controller.js, dashboard.html, dashboard.scss

tambah kondisi baru di index.route.js

.when('/timeoptions', {
        templateUrl : 'app/dashboard/dashboard.html',
        controller: 'dashboardController',
        controllerAs: 'dashboard'
      })

penamaan controller harus di akhiri dengan "controller" contoh : SettingsController, MainController, TimeOptionsController
semua file yang di buat di folder app akan otomatis di include (js, html, scss)
