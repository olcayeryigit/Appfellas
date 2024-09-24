
# Uçuş Rezervasyon Sistemi

Bu proje, bir uçuş rezervasyon sistemi oluşturmak için tasarlanmıştır. Proje, hem bir **backend** (sunucu tarafı) hem de bir **frontend** (istemci tarafı) içermektedir. Aşağıda projenin kurulumu, çalıştırılması ve bağımlılıkları hakkında bilgiler bulabilirsiniz.

## Proje Yapısı
## Backend

### Bağımlılıklar

- **[axios](https://axios-http.com/)**: HTTP istekleri yapmak için kullanılan bir kütüphane.
- **[cors](https://github.com/expressjs/cors)**: Cross-Origin Resource Sharing (CORS) ayarlarını yönetmek için.
- **[express](https://expressjs.com/)**: Node.js üzerinde web uygulamaları geliştirmek için minimal ve esnek bir framework.
- **[mongoose](https://mongoosejs.com/)**: MongoDB ile etkileşimde bulunmak için kullanılan bir ODM (Object Data Modeling) kütüphanesi.

### Kurulum

1. Backend dizinine gidin:
   ```bash
   cd backend

Gerekli bağımlılıkları yükleyin:
npm install

Sunucuyu başlatın:
node server.js

Frontend
Bağımlılıklar

axios: API istekleri yapmak için.
bootstrap: Hızlı ve kolay bir şekilde modern web sayfaları tasarlamak için.
react: Kullanıcı arayüzleri oluşturmak için kullanılan bir kütüphane.
react-bootstrap: Bootstrap bileşenlerini React uygulamalarında kullanmak için.
react-datepicker: Tarih seçimi için bir bileşen.
react-dom: React bileşenlerini DOM'a yerleştirmek için.
react-icons: İkonlar için.
react-router-dom: React uygulamaları için yönlendirme desteği.
Kurulum

Frontend dizinine gidin:
cd frontend
Gerekli bağımlılıkları yükleyin:

npm install
Uygulamayı geliştirme modunda başlatın:

npm run dev

Proje Konfigürasyonu
Backend uygulaması, http://localhost:3000 üzerinde çalışan bir API'ye proxy ayarına sahiptir. Frontend uygulaması, API ile iletişim kurmak için bu proxy ayarını kullanır

Uygulama Arayüzü Ekran Görselleri
![2](https://github.com/user-attachments/assets/78a71ef4-24a3-43be-8d1c-f16d01a98f95)
![1](https://github.com/user-attachments/assets/14dfa7f3-d8cb-472e-8c65-2d577aa07fd0)
![3](https://github.com/user-attachments/assets/576832ba-0b21-4519-bacc-d1c4ab1bb79d)
![4](https://github.com/user-attachments/assets/e734d94d-edd8-42d7-b830-56d70503276f)
