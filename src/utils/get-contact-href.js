// @flow strict
const getContactHref = (name: string, contact: string) => {
  let href;

  switch (name) {
    case 'github':
      href = `https://github.com/${contact}`;
      break;
    case 'email':
      href = `mailto:${contact}`;
      break;
    case 'linkedin':
      href = `https://www.linkedin.com/in/${contact}`;
      break;
    case 'instagram':
      href = `https://www.instagram.com/${contact}`;
      break;
    case 'youtube':
      href = `https://www.youtube.com/channel/${contact}`;
      break;
    case 'medium':
      href = `https://${contact}.medium.com`;
      break;
    default:
      href = contact;
      break;
  }

  return href;
};

export default getContactHref;
