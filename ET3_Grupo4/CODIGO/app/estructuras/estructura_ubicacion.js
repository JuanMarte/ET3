const estructura_ubicacion = {
    entity: 'ubicacion',
    attributes: {
        id_site: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 10
            },
            is_pk: true,
            is_autoincrement: true,
            rules: {
                validations: {
                    SEARCH: {
                        exp_reg: '^[0-9]*$'
                    }
                }
            }
        },
        site_latitud: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 20
            },
            rules: {
                validations: {
                    ADD: {
                        min_size: 1,
                        max_size: 20,
                        exp_reg: '^[-+]?([0-9]*[.])?[0-9]+$'
                    },
                    EDIT: {
                        min_size: 1,
                        max_size: 20,
                        exp_reg: '^[-+]?([0-9]*[.])?[0-9]+$'
                    },
                    SEARCH: {
                        exp_reg: '^[-+]?([0-9]*[.])?[0-9]+$'
                    }
                }
            }
        },
        site_longitud: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 20
            },
            rules: {
                validations: {
                    ADD: {
                        min_size: 1,
                        max_size: 20,
                        exp_reg: '^[-+]?([0-9]*[.])?[0-9]+$'
                    },
                    EDIT: {
                        min_size: 1,
                        max_size: 20,
                        exp_reg: '^[-+]?([0-9]*[.])?[0-9]+$'
                    },
                    SEARCH: {
                        exp_reg: '^[-+]?([0-9]*[.])?[0-9]+$'
                    }
                }
            }
        },
        site_altitude: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 10
            },
            rules: {
                validations: {
                    ADD: {
                        min_size: 1,
                        max_size: 4,
                        exp_reg: '^-?[0-9]+$'
                    },
                    EDIT: {
                        min_size: 1,
                        max_size: 4,
                        exp_reg: '^-?[0-9]+$'
                    },
                    SEARCH: {
                        exp_reg: '^-?[0-9]*$'
                    }
                }
            }
        },
        site_locality: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 40
            },
            rules: {
                validations: {
                    ADD: {
                        min_size: 3,
                        max_size: 40,
                        exp_reg: '^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\\s]+$'
                    },
                    EDIT: {
                        min_size: 3,
                        max_size: 40,
                        exp_reg: '^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\\s]+$'
                    },
                    SEARCH: {
                        exp_reg: '^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\\s]*$'
                    }
                }
            }
        },
        site_provider_login: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 30
            },
            rules: {
                validations: {
                    ADD: {
                        min_size: 3,
                        max_size: 30,
                        exp_reg: '^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\\s]+$'
                    },
                    EDIT: {
                        min_size: 3,
                        max_size: 30,
                        exp_reg: '^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\\s]+$'
                    },
                    SEARCH: {
                        exp_reg: '^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\\s]*$'
                    }
                }
            }
        },
        site_north_photo: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 40
            },
            is_file_ref: true,
            file_server_path: 'http://193.147.87.202/ET2/filesuploaded/files_site_north_photo/',
            rules: {
                validations: {
                    SEARCH: {
                        exp_reg: '^[a-zA-Z0-9.]*$'
                    }
                }
            }
        },
        nuevo_site_north_photo: {
            html: {
                tag: 'input',
                type: 'file',
                multiple: false
            },
            rules: {
                validations: {
                    ADD: {
                        no_file: true,
                        max_size_file: 2000000,
                        type_file: ['image/jpeg', 'image/jpg'],
                        format_name_file: '^[a-zA-Z0-9.]+\\.(jpg|jpeg)$',
                        min_size: 7,
                        max_size: 50
                    },
                    EDIT: {
                        max_size_file: 2000000,
                        type_file: ['image/jpeg', 'image/jpg'],
                        format_name_file: '^[a-zA-Z0-9.]+\\.(jpg|jpeg)$',
                        min_size: 7,
                        max_size: 50
                    }
                }
            }
        },
        site_south_photo: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 40
            },
            is_file_ref: true,
            file_server_path: 'http://193.147.87.202/ET2/filesuploaded/files_site_south_photo/',
            rules: {
                validations: {
                    SEARCH: {
                        exp_reg: '^[a-zA-Z0-9.]*$'
                    }
                }
            }
        },
        nuevo_site_south_photo: {
            html: {
                tag: 'input',
                type: 'file',
                multiple: false
            },
            rules: {
                validations: {
                    ADD: {
                        no_file: true,
                        max_size_file: 2000000,
                        type_file: ['image/jpeg', 'image/jpg'],
                        format_name_file: '^[a-zA-Z0-9.]+\\.(jpg|jpeg)$',
                        min_size: 7,
                        max_size: 50
                    },
                    EDIT: {
                        max_size_file: 2000000,
                        type_file: ['image/jpeg', 'image/jpg'],
                        format_name_file: '^[a-zA-Z0-9.]+\\.(jpg|jpeg)$',
                        min_size: 7,
                        max_size: 50
                    }
                }
            }
        },
        site_east_photo: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 40
            },
            is_file_ref: true,
            file_server_path: 'http://193.147.87.202/ET2/filesuploaded/files_site_east_photo/',
            rules: {
                validations: {
                    SEARCH: {
                        exp_reg: '^[a-zA-Z0-9.]*$'
                    }
                }
            }
        },
        nuevo_site_east_photo: {
            html: {
                tag: 'input',
                type: 'file',
                multiple: false
            },
            rules: {
                validations: {
                    ADD: {
                        no_file: true,
                        max_size_file: 2000000,
                        type_file: ['image/jpeg', 'image/jpg'],
                        format_name_file: '^[a-zA-Z0-9.]+\\.(jpg|jpeg)$',
                        min_size: 7,
                        max_size: 50
                    },
                    EDIT: {
                        max_size_file: 2000000,
                        type_file: ['image/jpeg', 'image/jpg'],
                        format_name_file: '^[a-zA-Z0-9.]+\\.(jpg|jpeg)$',
                        min_size: 7,
                        max_size: 50
                    }
                }
            }
        },
        site_west_photo: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 40
            },
            is_file_ref: true,
            file_server_path: 'http://193.147.87.202/ET2/filesuploaded/files_site_west_photo/',
            rules: {
                validations: {
                    SEARCH: {
                        exp_reg: '^[a-zA-Z0-9.]*$'
                    }
                }
            }
        },
        nuevo_site_west_photo: {
            html: {
                tag: 'input',
                type: 'file',
                multiple: false
            },
            rules: {
                validations: {
                    ADD: {
                        no_file: true,
                        max_size_file: 2000000,
                        type_file: ['image/jpeg', 'image/jpg'],
                        format_name_file: '^[a-zA-Z0-9.]+\\.(jpg|jpeg)$',
                        min_size: 7,
                        max_size: 50
                    },
                    EDIT: {
                        max_size_file: 2000000,
                        type_file: ['image/jpeg', 'image/jpg'],
                        format_name_file: '^[a-zA-Z0-9.]+\\.(jpg|jpeg)$',
                        min_size: 7,
                        max_size: 50
                    }
                }
            }
        }
    }
};
