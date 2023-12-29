import type { Schema, Attribute } from '@strapi/strapi';

export interface CommonLinkWithImage extends Schema.Component {
  collectionName: 'components_common_link_with_images';
  info: {
    displayName: 'LinkWithImage';
  };
  attributes: {
    href: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    isExternal: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    isVisible: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    image: Attribute.Media & Attribute.Required;
  };
}

export interface CommonLink extends Schema.Component {
  collectionName: 'components_common_links';
  info: {
    displayName: 'LinkBasic';
    description: '';
  };
  attributes: {
    href: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    isExternal: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface CommonSeo extends Schema.Component {
  collectionName: 'components_common_seos';
  info: {
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
  };
}

export interface GeneralLocalization extends Schema.Component {
  collectionName: 'components_general_localizations';
  info: {
    displayName: 'Localization';
  };
  attributes: {
    href: Attribute.String & Attribute.Required;
    street: Attribute.String & Attribute.Required;
    postCode: Attribute.String & Attribute.Required;
    city: Attribute.String & Attribute.Required;
  };
}

export interface GeneralOpenHours extends Schema.Component {
  collectionName: 'components_general_open_hours';
  info: {
    displayName: 'OpenHours';
    description: '';
  };
  attributes: {
    day: Attribute.String & Attribute.Required;
    from: Attribute.Time & Attribute.Required & Attribute.DefaultTo<'00:00'>;
    to: Attribute.Time & Attribute.Required & Attribute.DefaultTo<'00:00'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'common.link-with-image': CommonLinkWithImage;
      'common.link': CommonLink;
      'common.seo': CommonSeo;
      'general.localization': GeneralLocalization;
      'general.open-hours': GeneralOpenHours;
    }
  }
}
