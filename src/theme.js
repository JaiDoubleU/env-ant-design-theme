

export const lightTheme = {
  token: {
   // General Tokens
    borderRadius: 3, // Global border radius
    borderWidth: 0.5, // Global border width
    boxShadow: 'none', // Sets the global box shadow to none
    boxShadowCard: 'none', // Specific for Card component shadows
    boxShadowDrawer: 'none', // Specific for Drawer component
    boxShadowPopoverArrow: 'none', // Specific for Popover component
    boxShadowSecondary: 'none', // Removes secondary box shadows
    boxShadowTooltip: '0 1px 2px -2px rgba(0, 0, 0, 1.0)', // Specific for Tooltip component
    controlHeight: 32, // Default height of controls
    dangerShadow: 'none',
    defaultShadow: 'none',
    fontFamily: ' sans-serif', // Font family
    fontSizeBase: 15, // Base font size
    fontSizeLg: 16, // Large font size
    fontSizeSm: 12, // Small font size
    fontWeightBold: 500, // Bold font weight
    fontWeightNormal: 400, // Normal font weight
    lineHeight: 1.5, // Base line height
    lineHeightLg: 1.8, // Large line height
    lineHeightSm: 1.2, // Small line height
    primaryShadow: 'none',
    spacingUnit: 8, // Base unit for spacing

    // Global Color Tokens
    colorBgBase: '#e8e8e8', // Base background color
    colorBgContainer: '#e8e8e8', // Background color for containers
    colorBgElevated: '#ebebeb',
    colorBgLayout: '#e8e8e8', // Layout background color
    colorBorderBase: '#d9d9d9', // Base border color
    colorBorderHover: '#C5C5C5', // Border color on hover
    colorError: '#f5222d', // Error color
    colorInfo: '#1890ff', // Info color
    colorLink: '#2576A7', // Link color
    colorLinkHover: '#3193CE', // Link color on hover
    colorPrimary: '#387F1D', // Primary brand color
    colorPrimaryActive: '#2A6314', // Primary color when active
    colorPrimaryHover: '#479E26', // Primary color when hovered
    colorSuccess: '#52c41a', // Success color
    colorText: "#0F0F0F",
    colorTextBase: '#0F0F0F', // Base text color
    colorTextDisabled: '#6A6670', // Disabled text color
    colorTextPlaceholder:	'2B292E',
    colorTextQuaternary: "#ddddde",
    colorTextSecondary: "#eeeeee",
    colorTextTertiary: "#e7e7e7",
    colorTextWarning: "#000",
    colorWarning: '#faad14', // Warning color  
  },
  components: {
  //   Alert: {
  //     colorText: '#fdfdfd',
  //     colorSuccessBg: '#2a5b17',
  //     colorInfoBg: '#005072',
  //     colorInfoBorder: '#005072',
  //     colorSuccessBorder: '#2a5b17',
  //     colorWarningBg: '#825D00',
  //     colorErrorBg: '#89230C',
  //     colorErrorBorder: '#89230C',
  //     colorError: '#F8BDB0',
  //     colorWarningBorder: '#825D00',
  //     colorWarning: '#FFE7AB',
  //     colorSuccess: '#8BDA6C',
  //     colorInfo: '#47C8FF',
  //   },
    Badge: {
      colorBgContainer: '#fff', 
    },
    Breadcrumb: {
      itemColor: '#0F0F0F',
      separatorColor: '#0F0F0F',
    },
    Button: {
      colorBgTextHover: "#323035",
      colorBorder: "#d9d9d9",
      colorBgContainer: "#F7F7F7",
      colorBgContainerDisabled: "#9a989c",
      colorLink: "#2576A7",
      colorLinkActive: "rgb(37, 111, 157)",
      colorLinkHover: "rgb(152, 201, 231)",
      controlOutline: "#625f66", 
      controlOutlineWidth: 0,
      controlTmpOutline: "rgba(253, 253, 253, 0.0)",
      defaultHoverBg: "#A09CA5",
      defaultShadow: "none",
      dangerShadow: "none",
      primaryShadow: "none"
    },
    Card: {
      colorBorder: '#d9d9d9',
      colorBorderSecondary: "#d9d9d9",
      colorBgContainer: '#fdfdfd',
      headerBg: '#fdfdfd',
      footerBg: '#fdfdfd'
    },
    Collapse: {
      colorBgContainer: '#fefefe',
      colorBorder: "#d9d9d9",
      contentBg: "#fefefe",
      headerBg: "#fefefe",
    },
  //   Cascader: {
  //     colorBorder: '#56535b',
  //     colorBgContainer: '#56535b',
  //     colorBgContainerDisabled: 'rgba(253, 253, 253, 0.2)',
  //     controlItemBgActive: 'rgba(253, 253, 253, 0.1)',
  //   },
  //   Checkbox: {
  //     colorBorder: '#d9d9d9',
  //   },
  //   DatePicker: {
  //     colorSplit: '#78757b',
  //     colorBgContainer: '#ededed',
  //     colorBorder: '#d9d9d9',
  //   },
  //   Divider: {
  //     colorSplit: '#625f66',
  //   },
  //   Form: {
  //     colorBorder: '#d9d9d9',
  //   },
    Input: {
      colorBorder: '#d9d9d9',
      colorBgContainer: "#F7F7F7",
    },
  List: {
    colorBorder: "#d9d9d9",
    colorSplit: "#d9d9d9",
    headerBg: '#fefefe',
    footerBg: '#fefefe'
  } , 
  //   InputNumber: {
  //     colorBorder: '#d9d9d9',
  //     colorBgContainer: '#d9d9d9', 
  //   },
   Menu: {
      itemColor: '#fdfdfd',
      colorPrimary: '#8BDA6C',
      colorSplit: 'rgba(60, 58, 63, 0)',
      itemBg: '#48454b',
      itemBgHover: '#3F7619',
      itemSelectedBg: '#3F7619',
      itemSelectedColor: '#fdfdfd',
      itemHoverBg: "rgb(250,219,20)",
    },
    Modal: {
       itemBg: '#48454b',
    },
    Popover: {
     algorithm: true
   },
  //   Pagination: {
  //     colorBgTextActive: '#323035',
  //     colorBgTextHover: 'rgba(253, 253, 253, 0.01)',
  //     colorBorder: '#78757b',
  //     colorBgContainerDisabled: '#9a989c',
  //     controlItemBgActiveDisabled: '#9a989c',
  //   },
  //   Rate: {
  //     colorFillContent: 'rgba(253, 253, 253, 0.7)',
  //   },
  //   Select: {
  //     controlItemBgActive: '#b2b1b3',
  //     colorFillSecondary: 'rgba(253, 253, 253, 0.25)',
  //     controlOutline: '#56535b',
  //     colorBgContainer: '#ededed',
  //     colorBorder: '#56535b',
  //     colorItemTextSelected: '#8BDA6C',
  //     colorItemBgSelected: '#3c3a3f',
  //     colorTextDisabled: 'rgb(98, 95, 102)',
  //   },
    Table: {
      colorLink: '#47c8ff',
      colorFillSecondary: 'rgb(72, 69, 75)',
      colorFillContent: 'rgb(50, 48, 53)',
    },
  //   Tabs: {
  //     colorPrimary: '#8BDA6C',
  //     colorPrimaryActive: '#8BDA6C',
  //   },
  //   TreeSelect: {
  //     controlItemBgActive: '#217e83',
  //   },
  //   Upload: {
  //     colorPrimaryHover: '#8BDA6C',
  //     fontFamily: "Roboto,'Roboto Flex',-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol','Noto Color Emoji'",
  //   },
  //   Message: {
  //     colorBgElevated: 'rgb(120, 117, 123)',
  //   },
  //   Anchor: {
  //     colorText: 'rgb(152, 201, 231)',
  //   
  //   Modal: {
  //     titleFontSize: 18,
  //   },
  //   // Conponent Specific Tokens

  //   // Header Tokens
  //   colorBgHeader: '#000000', // Background color for the header
  //   headerBorderColor: '#d9d9d9', // Border color for the header
  //   headerBorderWidth: 1, // Border width for the header

  //   // Typography
  //   headerFontSize: 18, // Font size for the header text
  //   headerFontWeight: 600, // Font weight for the header text
  //   headerFontFamily: 'Arial, sans-serif', // Font family for the header text
  //   headerTextColor: '#262626', // Text color for the header
  //   headerLineHeight: 1.4, // Line height for the header text

  //   // Spacing
  //   headerPaddingVertical: 16, // Vertical padding inside the header
  //   headerPaddingHorizontal: 24, // Horizontal padding inside the header
  //   headerMarginBottom: 16, // Margin below the header

  //   // Icon and Decoration
  //   headerIconColor: '#1890ff', // Color for icons in the header
  //   headerIconSize: 20, // Size for icons in the header
  //   headerLinkColor: '#1890ff', // Link color inside the header
  //   headerLinkHoverColor: '#40a9ff', // Link color on hover

  //   // Shadow and Effects
  //   headerShadow: '0 2px 8px rgba(0, 0, 0, 0.15)', // Shadow for the header


  //   // Button Tokens
  //   buttonPrimaryBg: '#1890ff', // Primary button background color
  //   buttonPrimaryColor: '#ffffff', // Primary button text color
  //   buttonBorderRadius: 4, // Button border radius
  //   buttonPaddingHorizontal: 16, // Horizontal padding inside buttons
  //   buttonFontSize: 14, // Font size inside buttons

  //   // Input Tokens
  //   inputBg: '#ccc', // Input background color
  //   inputBorderColor: '#d9d9d9', // Input border color
  //   inputPaddingHorizontal: 12, // Input horizontal padding
  //   inputFontSize: 14, // Font size inside inputs

  //   // Table Tokens
  //   tableBg: '#ffffff', // Table background color
  //   tableBorderColor: '#d9d9d9', // Table border color
  //   tableHeaderBg: '#fafafa', // Table header background color
  //   tableRowHoverBg: '#f5f5f5', // Table row hover background color
  //   tableCellPadding: 8, // Table cell padding

  //   // Modal Tokens
  //   modalHeaderBg: '#f0f2f5', // Modal header background color
  //   modalBodyBg: '#ffffff', // Modal body background color
  //   modalFooterBg: '#f0f2f5', // Modal footer background color
  //   modalCloseColor: '#000000', // Modal close button color

  //   // Card Tokens
  //   cardBg: '#ffffff', // Card background color
  //   cardBorderColor: '#d9d9d9', // Card border color
  //   cardShadow: '0 1px 2px rgba(0, 0, 0, 0.1)', // Card shadow
  //   cardPadding: 16, // Card padding

  //   // Tag Tokens
  //   tagColor: '#595959', // Tag text color
  //   tagBg: '#f0f0f0', // Tag background color
  //   tagBorderRadius: 4, // Tag border radius

  //   // Badge Tokens
  //   badgeBg: '#f5222d', // Badge background color
  //   badgeColor: '#ffffff', // Badge text color
  //   badgeFontSize: 12, // Badge font size

  //   // Tooltip Tokens
  //   tooltipBg: '#000000', // Tooltip background color
  //   tooltipColor: '#ffffff', // Tooltip text color

  //   // Switch Tokens
  //   switchColor: '#1890ff', // Switch color
  //   switchBg: '#d9d9d9', // Switch background color when off
  //   switchHeight: 22, // Height of the switch

  //   // Progress Tokens
  //   progressColor: '#1890ff', // Progress bar color
  //   progressBg: '#f5f5f5', // Progress background color

  //   // Alert Tokens
  //   alertBg: '#fff', // Alert background color
  //   alertBorderColor: '#d9d9d9', // Alert border color
  //   alertIconColor: '#faad14', // Alert icon color

  //   // Slider Tokens
  //   sliderRailColor: '#d9d9d9', // Slider rail color
  //   sliderTrackColor: '#1890ff', // Slider track color

  //   // Dropdown Tokens
  //   dropdownMenuBg: '#ffffff', // Dropdown menu background color
  //   dropdownMenuItemHoverBg: '#f0f0f0', // Dropdown menu item hover background color

  //   // Pagination Tokens
  //   paginationItemBg: '#ffffff', // Pagination item background color
  //   paginationItemColor: '#000', // Pagination item text color
  //   paginationItemBorderColor: '#d9d9d9', // Pagination item border color

  //   // Steps Tokens
  //   stepsItemBg: '#f0f2f5', // Steps item background color
  //   stepsItemIconColor: '#1890ff', // Steps item icon color
  //   stepsItemTextColor: '#595959', // Steps item text color
  },
};

export const darkTheme = {
  token: {     
   // General Tokens
    borderRadius: 3, // Global border radius
    borderWidth: 0.5, // Global border width
    boxShadow: 'none', // Sets the global box shadow to none
    boxShadowCard: 'none', // Specific for Card component shadows
    boxShadowDrawer: 'none', // Specific for Drawer component
    boxShadowPopoverArrow: 'none', // Specific for Popover component
    boxShadowSecondary: 'none', // Removes secondary box shadows
    boxShadowTooltip: '0 1px 2px -2px rgba(0, 0, 0, 1.0)', // Specific for Tooltip component
    controlHeight: 32, // Default height of controls
    dangerShadow: 'none',
    defaultShadow: 'none',
    fontFamily: ' sans-serif', // Font family
    fontSizeBase: 15, // Base font size
    fontSizeLg: 16, // Large font size
    fontSizeSm: 12, // Small font size
    fontWeightBold: 500, // Bold font weight
    fontWeightNormal: 400, // Normal font weight
    lineHeight: 1.5, // Base line height
    lineHeightLg: 1.8, // Large line height
    lineHeightSm: 1.2, // Small line height
    primaryShadow: 'none',
    spacingUnit: 8, // Base unit for spacing

    // Global Color Tokens
    colorBgBase: '#3e3e3e', // Base background color
    colorBgContainer: '#3c3c3c', // Background color for containers
    colorBgElevated: '#424242',
    colorBgLayout: '#424242', // Layout background color
    colorBorderBase: '#d9d9d9', // Base border color
    colorBorderHover: '#C5C5C5', // Border color on hover
    colorError: '#f5222d', // Error color
    colorInfo: '#1890ff', // Info color
    colorLink: '#2576A7', // Link color
    colorLinkHover: '#3193CE', // Link color on hover
    colorPrimary: '#387F1D', // Primary brand color
    colorPrimaryActive: '#2A6314', // Primary color when active
    colorPrimaryHover: '#479E26', // Primary color when hovered
    colorSuccess: '#52c41a', // Success color
    colorText: "#fefefe",
    colorTextBase: '#fefefe', // Base text color
    colorTextDisabled: '#6A6670', // Disabled text color
    colorTextPlaceholder:	'2B292E',
    colorTextQuaternary: "#ddddde",
    colorTextSecondary: "#eeeeee",
    colorTextTertiary: "#e7e7e7",
    colorTextWarning: "#000",
    colorWarning: '#faad14', // Warning color  
  },
};