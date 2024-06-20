const vaildAlert = (msg, type = "danger") => {
  return `<p class="alert alert-${type} d-flex justify-content-between">${msg} <button class="btn-close" data-bs-dismiss="alert"></button></p>`;
};

/**
 * Generate uniqe ID
 * @returns
 */
const creatId = () => {
  // 4-byte timestamp
  const timestamp = Math.floor(Date.now() / 1000).toString(16);

  // 5-byte random value
  const randomValue = Math.floor(Math.random() * 0xffffffffff)
    .toString(16)
    .padStart(10, "0");

  // 3-byte incrementing counter
  const counter = (creatId.counter =
    (creatId.counter || Math.floor(Math.random() * 0xffffff)) + 1)
    .toString(16)
    .padStart(6, "0");

  return timestamp + randomValue + counter;
};

/**
 * Times tracker
 * @param {*} createdAt
 * @returns
 */

const timeAgo = (createdAt) => {
  const seconds = Math.floor((new Date() - createdAt) / 1000);

  let interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return interval + " years ago";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months ago";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days ago";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours ago";
  }
  interval = Math.floor(seconds / 60);
  if (interval >= 1) {
    return interval + " minutes ago";
  }
  return "Just Now";
};
