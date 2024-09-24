
# Uçuş Rezervasyon Sistemi

Bu proje, bir uçuş rezervasyon sistemi oluşturmak için tasarlanmıştır. Proje, hem bir **backend** (sunucu tarafı) hem de bir **frontend** (istemci tarafı) içermektedir. Aşağıda projenin kurulumu, çalıştırılması ve bağımlılıkları hakkında bilgiler bulabilirsiniz.

## Proje Yapısı
## Backend

### Bağımlılıklar

- **[axios](https://axios-http.com/)**: HTTP istekleri yapmak için kullanılan bir kütüphane.
- **[cors](https://github.com/expressjs/cors)**: Cross-Origin Resource Sharing (CORS) ayarlarını yönetmek için.
- **[express](https://expressjs.com/)**: Node.js üzerinde web uygulamaları geliştirmek için minimal ve esnek bir framework.
- **[mongoose](https://mongoosejs.com/)**: MongoDB ile etkileşimde bulunmak için kullanılan bir ODM (Object Data Modeling) kütüphanesi.


## Frontend

## Bağımlılıklar

- **axios:** API istekleri yapmak için.
- **bootstrap:** Hızlı ve kolay bir şekilde modern web sayfaları tasarlamak için.
- **react:**  Kullanıcı arayüzleri oluşturmak için kullanılan bir kütüphane.
- **react-bootstrap:** Bootstrap bileşenlerini React uygulamalarında kullanmak için.
- **react-datepicker:** Tarih seçimi için bir bileşen.
- **react-dom:** React bileşenlerini DOM'a yerleştirmek için.
- **react-icons:** İkonlar için.
- **react-router-dom:** React uygulamaları için yönlendirme desteği.

### Kurulum

1. Backend dizinine gidin:
   ```bash
   cd backend

Gerekli bağımlılıkları yükleyin:
npm install

Sunucuyu başlatın:
node server.js


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
![1](https://github.com/user-attachments/assets/564c9632-9e8c-4467-acb9-b40fbdf6271f)
![2](https://github.com/user-attachments/assets/22b48155-8e78-4bbf-be83-aaefe1c416d9)
![3](https://github.com/user-attachments/assets/80072a9a-0afa-40ac-916e-3f3dd144fd0b)
![4](https://github.com/user-attachments/assets/42042b89-07be-47f2-bf4e-1455edb6ac18)
