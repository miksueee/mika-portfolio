import { Linkedin, Mail, PhoneCall, MapPin } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/in/mikaela-denise-cobarrubias-1aa762338", 
      label: "LinkedIn" 
    },
    { 
      icon: Mail, 
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=mdenisecobarrubias@gmail.com", 
      label: "Email" 
    },
    { 
      icon: PhoneCall, 
      href: "viber://chat?number=+639458530649", 
      label: "Viber" 
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mdenisecobarrubias@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=mdenisecobarrubias@gmail.com"
    },
    {
      icon: PhoneCall,
      label: "Phone",
      value: "+639458530649 / +639513359030",
      href: "viber://chat?number=+639458530649"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Cebu City, Philippines",
      href: null
    }
  ];

  return (
    <footer id="contact" className="py-16 bg-card border-t border-border relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="font-serif text-3xl font-semibold text-foreground mb-3">
              Miks<span className="text-primary">.</span>
            </h3>
            <p className="font-sans text-sm text-muted-foreground mb-6 leading-relaxed">
              Crafting Visual Stories Through Design & Photography
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3 justify-center md:justify-start">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 flex items-center justify-center glass-card rounded-full text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h4 className="font-serif text-lg font-semibold text-foreground mb-6">
              Get In Touch
            </h4>
            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-3 justify-center md:justify-start group">
                  <div className="w-10 h-10 flex items-center justify-center glass-card rounded-lg text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="font-sans text-xs text-muted-foreground mb-1">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-sans text-sm text-foreground hover:text-primary transition-colors duration-300"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-sans text-sm text-foreground">
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links or CTA */}
          <div className="text-center md:text-left">
            <h4 className="font-serif text-lg font-semibold text-foreground mb-6">
              Let's Collaborate
            </h4>
            <p className="font-sans text-sm text-muted-foreground mb-6 leading-relaxed">
              Have a project in mind? I'd love to hear about it. Let's create something amazing together.
            </p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mdenisecobarrubias@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-sans text-sm hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Mail className="w-4 h-4" />
              Start a Conversation
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} All rights reserved.
          </p>
          {/* <p className="font-sans text-xs text-muted-foreground">
            Designed & Built with ❤️
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;