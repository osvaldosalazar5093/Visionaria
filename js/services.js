document.addEventListener('DOMContentLoaded', function() {
  const currentPage = window.location.pathname;
  // Extraer solo el nombre de la página y la extensión .html
  const currentPageName = currentPage.substring(currentPage.lastIndexOf('/') + 1);
  
  if(currentPageName != 'index.html'){
      loadSlider('selectedService');
  }
  localStorage.removeItem('selectedProperty')
});


function setService(service) {
    switch(service) {
      case 'WebPages':
        localStorage.setItem('selectedService', JSON.stringify({
          name: 'Web Pages',
          description: 'Transform your online presence with our custom web page designs. Our innovative approach combines creativity and technology to deliver websites that not only look great but also perform flawlessly. Whether you\'re looking to launch a new site or revamp an existing one, we have the expertise to bring your vision to life.',
          image: 'images/services/chef1.jpg',
          image2: 'images/services/chef2.jpg',
          background:'./images/services/background/bg-web-pages.jpg',image3: 'images/services/chef3.jpg',
          serviceTitle1: 'Custom Web Design',
          serviceTitle2: 'Mobile Responsive Design',
          serviceTitle3: 'Responsive Web Design',
          serviceDes1: 'We create custom-designed web pages tailored to your brand and business needs. Our designs are visually appealing, user-friendly, and optimized for performance across all devices.',
          serviceDes2: 'Our websites are designed to be mobile responsive, ensuring optimal viewing and interaction experience across a wide range of devices. This helps in improving user',
          serviceDes3: 'Our websites are built with responsive design, ensuring they look great and function smoothly on any device. Whether your visitors are using a desktop, tablet, or smartphone, your website will adapt to provide the best user experience.',

        }));
        break;
        
      case 'WebApps':
        localStorage.setItem('selectedService', JSON.stringify({
          name: 'Web Apps',
          description: 'Enhance your business operations with our innovative web applications. Our team of developers combines technical expertise with creative thinking to deliver web apps that empower your team and delight your customers. Whether you need a simple tool or a complex system, we have the skills and experience to turn your ideas into reality.',
          image: 'images/services/Water-Tours1.jpg',
          image2: 'images/services/Water-Tours2.jpg',
          background:'./images/services/background/bg-web-apps.jpg',image3: 'images/services/Water-Tours3.jpg',          
          serviceTitle1: 'Custom Development',
          serviceTitle2: 'Responsive Design',
          serviceTitle3: 'Performance Optimization',
          serviceDes1: 'We create custom web applications to meet the specific needs of your business. From planning to implementation, our team handles every stage of development to ensure that the application meets your expectations and requirements.',
          serviceDes2: 'We specialize in designing web applications that adapt to different devices and screen sizes. Our applications are designed to provide an optimal user experience, whether accessed from a desktop computer, tablet, or mobile phone.',
          serviceDes3: 'We optimize your web application for speed and performance. By implementing best practices and leveraging the latest technologies, we ensure that your application loads quickly and responds smoothly, providing users with a seamless experience.',
        }));
        break;
      case 'SystemBills':
        localStorage.setItem('selectedService', JSON.stringify({
          name: 'System of Bills',
          description: 'Optimize your financial operations with our advanced billing systems. Our solutions are designed to help you manage your invoices, track your payments, and analyze your financial data with ease. With our intuitive interfaces and powerful features, you can stay on top of your finances and focus on growing your business.',
          image: 'images/services/Land-Tours1.jpg',
          image2: 'images/services/Land-Tours2.jpg',
          background:'./images/services/background/bg-system-bills.jpg',image3: 'images/services/Land-Tours3.jpg',          
          serviceTitle1: 'Automated Invoicing',
          serviceTitle2: 'Comprehensive Invoice Management',
          serviceTitle3: 'Financial Reports and Analysis',
          serviceDes1: 'Simplify your invoicing process with our automated system. Generate invoices quickly and accurately, saving time and reducing errors.',
          serviceDes2: 'Our platform offers comprehensive invoice management, from creation to payment tracking. Organize and control your invoices efficiently and securely.',
          serviceDes3: 'Gain valuable insights into your finances with our integrated reports and analysis. Visualize your financial data clearly and make informed decisions for your business growth.',
        }));
        break;
      case 'Databases':
        localStorage.setItem('selectedService', JSON.stringify({
          name: 'DataBases',
          description: 'Harness the power of data with our database solutions. Our team of database architects and developers will work with you to design and implement a database system that meets your needs and exceeds your expectations. Whether you\'re looking to improve data management, enhance data analytics, or streamline data reporting, we can help you achieve your goals.',
          image: 'images/home-puma/img-casa-puma-03.jpeg',
          image2: 'images/home-boyer/img-casa-boyer-06.jpeg',
          background:'./images/services/background/bg-databases.jpg',image3: 'images/home-puma/img-casa-puma-01.jpeg',         
          serviceTitle1: 'Database Design and Development',
          serviceTitle2: 'Data Security and Integrity',
          serviceTitle3: 'Database Migration and Integration',
          serviceDes1: 'We specialize in designing and developing databases tailored to your needs. Our expert team ensures efficient data organization, storage, and retrieval for optimal performance.',
          serviceDes2: 'Protect your valuable data with our robust security measures. We implement best practices to ensure the integrity and confidentiality of your data, keeping it safe from unauthorized access.',
          serviceDes3: 'Seamlessly migrate your data to a new system or integrate it with existing databases. Our team handles the entire process to ensure a smooth transition and minimal downtime.'

        }));
        break;
      case 'Development':
        localStorage.setItem('selectedService', JSON.stringify({
          name: 'Development',
          description: 'Drive your applications with powerful back-end solutions. Our back-end development team combines technical expertise with industry best practices to deliver back-end systems that meet your current needs and future growth. Whether you\'re building a new application or upgrading an existing one, we can help you build a back-end that supports your business goals.',
          image: 'images/services/Rent-A-Car1.jpg',
          image2: 'images/services/Rent-A-Car2.jpg',
          background:'./images/services/background/bg-development.jpg',image3: 'images/services/Rent-A-Car3.jpg',
          serviceTitle1: 'Custom Development',
          serviceTitle2: 'Responsive Design',
          serviceTitle3: 'Performance Optimization',
          serviceDes1: 'We create custom web applications to meet the specific needs of your business. From planning to implementation, our team handles every stage of development to ensure that the application meets your expectations and requirements.',
          serviceDes2: 'We specialize in designing web applications that adapt to different devices and screen sizes. Our applications are designed to provide an optimal user experience, whether accessed from a desktop computer, tablet, or mobile phone.',
          serviceDes3: 'We optimize your web application for speed and performance. By implementing best practices and leveraging the latest technologies, we ensure that your application loads quickly and responds smoothly, providing users with a seamless experience.'
        }));
        break;
      case 'UIUX':
        localStorage.setItem('selectedService', JSON.stringify({
          name: 'UI & UX',
          description: 'Deliver exceptional user experiences with our front-end design services. Our designers combine creativity with usability to create front-end designs that not only look great but also enhance user interactions. From responsive design to interactive elements, we can help you create a front-end that sets you apart from the competition.',
          image: 'images/services/Spa1.jpg',
          image2: 'images/services/Spa2.jpg',
          background:'./images/services/uiux.jpg',image3: 'images/services/Spa3.jpg',
          serviceTitle1: 'User-Centric Design',
          serviceTitle2: 'Interactive Prototyping',
          serviceTitle3: 'Usability Testing',
          serviceDes1: 'We design user interfaces with a focus on user needs and behaviors. Our designs are intuitive, visually appealing, and aimed at providing a seamless user experience.',
          serviceDes2: 'We create interactive prototypes to simulate the user experience and gather feedback early in the design process. This helps us refine the design and ensure its effectiveness before development.',
          serviceDes3: 'We conduct usability testing to evaluate the effectiveness and user-friendliness of your interface. Based on the results, we make iterative improvements to enhance the overall user experience.'
        }));
        break;
      case 'Catalog':
        localStorage.setItem('selectedService', JSON.stringify({
          name: 'Custom Catalog Design',
          description:'Showcase your products and services with our custom digital catalog designs. Our team of designers will work closely with you to create catalogs that not only showcase your offerings but also captivate your audience. Whether you need a digital catalog, a printed one, or both, we can help you create a custom design that meets your needs and exceeds your expectations.',
          image: 'images/services/Personal-Concierge1.jpg',
          image2: 'images/services/Personal-Concierge2.jpg',
          background:'./images/services/catalog.jpg',image3: 'images/services/Personal-Concierge3.jpg',
          serviceTitle1: 'Custom Digital Catalog Design',
          serviceTitle2: 'Interactive Features',
          serviceTitle3: 'Mobile-Friendly Design',
          serviceDes1: 'We specialize in creating custom digital catalogs tailored to your brand and products. Our designs are optimized for online viewing and digital distribution.',
          serviceDes2: 'Our digital catalogs include interactive features such as clickable links, embedded videos, and image galleries. These features enhance the user experience and engagement with your catalog.',
          serviceDes3: 'We ensure that your digital catalog is mobile-friendly, allowing users to easily view and navigate it on smartphones and tablets. This ensures a seamless experience across all devices.'
        }));
        break;
      case 'BusinessEmails':
        localStorage.setItem('selectedService', JSON.stringify({
          name: 'Business Emails',
          description: 'Stay connected with our business email solutions. Our email services are designed to help you communicate effectively with your team and your customers. With our secure and reliable email services, you can focus on growing your business while we take care of your email needs.',
          image: 'images/home-boyer/img-casa-boyer-01.jpeg',
          image2: 'images/services/Home-Management2.jpg',
          background:'./images/services/background/bg-business-emails.jpg',image3: 'images/services/Home-Management3.jpg',          
          serviceTitle1: 'Professional Email Setup',
          serviceTitle2: 'Branding and Customization',
          serviceTitle3: 'Security and Compliance',
          serviceDes1: 'We help set up professional email accounts for your business, using your domain name for a more professional appearance. Our setup includes configuring email clients and providing setup instructions.',
          serviceDes2: 'We customize your email templates to match your brand identity, including logos, colors, and fonts. This ensures that your emails are consistent with your brand image.',
          serviceDes3: 'We ensure that your email setup complies with security best practices and relevant regulations, such as GDPR. This includes implementing encryption, spam filtering, and data protection measures.'
        }));
        break;
      case 'SEO':
        localStorage.setItem('selectedService', JSON.stringify({
          name: 'SEO',
          description: 'Boost your online presence with our SEO strategies. Our SEO services are designed to help you reach your target audience and increase your website\'s visibility in search engine results. With our proven methods and best practices, we can help you achieve long-term success with your SEO efforts.',
          image: 'images/services/Property-Management1.jpg',
          image2: 'images/services/Property-Management2.jpg',
          background:'images/services/background/bg-seo.jpg',image3: 'images/home-boyer/img-casa-boyer-01.jpeg',
          serviceTitle1: 'Keyword Research and Analysis',
          serviceTitle2: 'On-Page Optimization',
          serviceTitle3: 'Strategic Data Collection',
          serviceDes1: 'We conduct thorough keyword research to identify the most relevant and high-traffic keywords for your website. This helps improve your website\'s visibility and ranking on search engine results pages.',
          serviceDes2: 'We optimize your website\'s on-page elements, such as meta tags, headings, and content, to make it more search engine friendly. This includes optimizing content for target keywords and improving site speed and user experience.',
          serviceDes3: 'We implement a meticulous process to gather and analyze data relevant to your business. This strategic data collection provides you with valuable insights to make informed decisions and enhance your business strategy.'
        }));
        break;
      default:
        console.error('Servicio no encontrado');
        break;
    }

    window.location.href = 'service.html';
  }
  