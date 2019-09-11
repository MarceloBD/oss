# Instalação

Para usar os comandos deste documento, será necessário ter o hygen instalado globalmente na máquina. Para isso execute o seguinte comando:

```
$ npm install -g hygen
```

# Templates

## Mutation

### _new_

Utilize este template para criar uma nova mutation dentro de um module. Ele irá criar a mutation no servidor - phoenix - e a chamada dessa mutation no front - moody.

| Question                  |          Answer |
| ------------------------- | --------------: |
| What's the module name?   |   `module_name` |
| What's the mutation name? | `mutation_name` |

```
$ hygen mutation new
```

---

## Input

### _new_

Utilize este template para criar um novo Input dentro de um module do servidor - phoenix.

| Question                |          Answer |
| ----------------------- | --------------: |
| What's the module name? |   `module_name` |
| What's the input name?  | `mutation_name` |

```
$ hygen input new
```

---

## Page

### _new_

Utilize este template para criar uma nova página no front - moody.

| Question                                 |         Answer |
| ---------------------------------------- | -------------: |
| What's the page name?                    |    `page_name` |
| What is the component type [react/pure]? | `[react/pure]` |
| Should add relay query renderer [y/n]?   |        `[y/n]` |

```
$ hygen page new
```

---

## Components

### Atenção! Somente usar este template para componentes genéricos que podem ser reutilizados em outros contextos. Nenhum componente com dependente de domínio deve estar aqui.

### _new_

Utilize este template para criar um novo component reutilizável no front - moody. A pasta default para se criar um component é `src/components/`, mas é possível indicar todo o caminho no prompt.

| Question                                 |           Answer |
| ---------------------------------------- | ---------------: |
| What's the component name                | `component_name` |
| What's the component path?               | `component_path` |
| What is the component type [react/pure]? |   `[react/pure]` |
| Should add relay query renderer [y/n]?   |          `[y/n]` |

```
$ hygen component new
```

### _styled_

Utilize este template para criar um novo component de UI no front - moody - utilizando o styled components. A pasta default para se criar um component é `src/components/`, mas é possível indicar todo o caminho no prompt.

| Question                   |           Answer |
| -------------------------- | ---------------: |
| What's the component name  | `component_name` |
| What's the component path? | `component_path` |

```
$ hygen component styled
```

---
