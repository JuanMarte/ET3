const estructura_articulo = {
    entity: 'articulo',
    attributes: {
        CodigoA: {
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
        AutoresA: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 50
            },
            rules: {
                validations: {
                    ADD: {
                        min_size: 2,
                        max_size: 200,
                        exp_reg: '^[a-zA-ZáéíóúÁÉÍÓÚñÑ\\s]+$'
                    },
                    EDIT: {
                        min_size: 2,
                        max_size: 200,
                        exp_reg: '^[a-zA-ZáéíóúÁÉÍÓÚñÑ\\s]+$'
                    },
                    SEARCH: {
                        exp_reg: '^[a-zA-ZáéíóúÁÉÍÓÚñÑ\\s]*$'
                    }
                }
            }
        },
        TituloA: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 50
            },
            rules: {
                validations: {
                    ADD: {
                        min_size: 1,
                        max_size: 100,
                        exp_reg: '^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\\s\\.,-]+$'
                    },
                    EDIT: {
                        min_size: 1,
                        max_size: 100,
                        exp_reg: '^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\\s\\.,-]+$'
                    },
                    SEARCH: {
                        exp_reg: '^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\\s\\.,-]*$'
                    }
                }
            }
        },
        TituloR: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 50
            },
            rules: {
                validations: {
                    ADD: {
                        min_size: 1,
                        max_size: 100,
                        exp_reg: '^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\\s\\.,-]+$'
                    },
                    EDIT: {
                        min_size: 1,
                        max_size: 100,
                        exp_reg: '^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\\s\\.,-]+$'
                    },
                    SEARCH: {
                        exp_reg: '^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\\s\\.,-]*$'
                    }
                }
            }
        },
        ISSN: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 9
            },
            rules: {
                validations: {
                    ADD: {
                        min_size: 9,
                        max_size: 9,
                        exp_reg: '^[0-9]{4}-[0-9]{4}$'
                    },
                    EDIT: {
                        min_size: 9,
                        max_size: 9,
                        exp_reg: '^[0-9]{4}-[0-9]{4}$'
                    },
                    SEARCH: {
                        exp_reg: '^[0-9-]*$'
                    }
                }
            }
        },
        VolumenR: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 4
            },
            rules: {
                validations: {
                    ADD: {
                        min_size: 1,
                        max_size: 4,
                        exp_reg: '^[0-9]+$'
                    },
                    EDIT: {
                        min_size: 1,
                        max_size: 4,
                        exp_reg: '^[0-9]+$'
                    },
                    SEARCH: {
                        exp_reg: '^[0-9]*$'
                    }
                }
            }
        },
        PagIniA: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 4
            },
            rules: {
                validations: {
                    ADD: {
                        min_size: 1,
                        max_size: 4,
                        exp_reg: '^[0-9]+$'
                    },
                    EDIT: {
                        min_size: 1,
                        max_size: 4,
                        exp_reg: '^[0-9]+$'
                    },
                    SEARCH: {
                        exp_reg: '^[0-9]*$'
                    }
                }
            }
        },
        PagFinA: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 4
            },
            rules: {
                validations: {
                    ADD: {
                        min_size: 1,
                        max_size: 4,
                        exp_reg: '^[0-9]+$'
                    },
                    EDIT: {
                        min_size: 1,
                        max_size: 4,
                        exp_reg: '^[0-9]+$'
                    },
                    SEARCH: {
                        exp_reg: '^[0-9]*$'
                    }
                }
            }
        },
        FechaPublicacionR: {
            html: {
                tag: 'input',
                type: 'date'
            },
            rules: {
                validations: {
                    ADD: {
                        date_format: true
                    },
                    EDIT: {
                        date_format: true
                    },
                    SEARCH: {
                        date_format: true
                    }
                }
            }
        },
        FicheropdfA: {
            html: {
                tag: 'input',
                type: 'text',
                component_visible_size: 20
            },
            is_file_ref: true,
            file_server_path: 'http://193.147.87.202/ET2/filesuploaded/files_FicheropdfA/',
            rules: {
                validations: {
                    SEARCH: {
                        exp_reg: '^[a-zA-Z0-9_\\-\\.]*$'
                    }
                }
            }
        },
        nuevo_FicheropdfA: {
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
                        type_file: ['application/pdf'],
                        format_name_file: '^[a-zA-Z0-9_\\-\\.]+\\.pdf$'
                    },
                    EDIT: {
                        max_size_file: 2000000,
                        type_file: ['application/pdf'],
                        format_name_file: '^[a-zA-Z0-9_\\-\\.]+\\.pdf$'
                    }
                }
            }
        },
        EstadoA: {
            html: {
                tag: 'select',
                options: ['Enviado', 'Revision', 'Publicado']
            },
            default_value: 'Enviado',
            rules: {
                validations: {
                    ADD: {
                        exp_reg: '^(Enviado|Revision|Publicado)$'
                    },
                    EDIT: {
                        exp_reg: '^(Enviado|Revision|Publicado)$'
                    },
                    SEARCH: {
                        exp_reg: '^(Enviado|Revision|Publicado)?$'
                    }
                }
            }
        }
    }
};