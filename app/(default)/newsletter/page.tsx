export const metadata = {
  title: "Features - Hyperblog",
  description: "Page description",
};

import PageIllustration from "@/components/page-illustration";
import Image from "next/image";
import AvatarImg01 from "@/public/images/avatar-group-01.jpg";
import AvatarImg02 from "@/public/images/avatar-group-02.jpg";
import AvatarImg03 from "@/public/images/avatar-group-03.jpg";
import AvatarImg04 from "@/public/images/avatar-group-04.jpg";
import FooterSeparator from "@/components/footer-separator";

export default function Newsletter() {
  return (
    <>
      <PageIllustration multiple />
      
      <FooterSeparator />
    </>
  );
}
