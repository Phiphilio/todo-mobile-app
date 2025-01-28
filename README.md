- **Projet :** App TODO simple.
- **Notions principales :**
  - Gestion de l’état local avec `useState` et `useReducer`.
  - Typage des états, des props et des fonctions avec TypeScript.
  - Création de composants réutilisables (boutons, cartes de tâches).
- **Incorporation :**
  - Réutilise les notions de composants et de props.
  - Applique les conventions TypeScript déjà vues.

### **1. Prérequis**

Avant de commencer, assure-toi d’avoir une bonne compréhension des bases suivantes :

1. **React Native :**
   - Création de composants (fonctionnels).
   - Compréhension de `props` et `state`.
   - Gestion d’événements (`onPress`, `onChangeText`, etc.).
2. **TypeScript :**
   - Typage de variables, objets, et fonctions.
   - Interfaces et types (`type` vs `interface`).
   - Utilisation de `React.FC` ou des fonctions fléchées avec TypeScript pour typer les composants.
3. **React Hooks :**
   - Utilisation de `useState` pour gérer l’état local.
   - Compréhension de `useReducer` comme alternative à `useState` pour des états plus complexes.

### **2. Notions principales à creuser**

Voici les notions spécifiques sur lesquelles te concentrer pour ce projet :

### **a. Gestion de l’état local**

- **Avec `useState`:**
  - Gérer des états simples (par exemple : une liste de tâches).
  -

**Avec `useReducer`:**

- Gérer des états plus complexes ou qui nécessitent plusieurs actions (exemple : ajouter, supprimer, marquer comme fait).

### **b. Typage des états, des props, et des fonctions**

**Typage des états avec `useState` et `useReducer`:**

Typage des props des composants

Typage des fonctions

Création de composants réutilisables

### **3. Étapes pour le projet**

1. **Structure initiale :**
   - Crée une application avec une structure simple.
   - Prépare un composant parent (par exemple : `App.tsx`) pour contenir les fonctionnalités principales.
2. **Ajout des tâches :**
   - Mets en place un champ texte pour entrer une nouvelle tâche.
   - Ajoute une fonction qui met à jour la liste des tâches via `useState` ou `useReducer`.
3. **Liste des tâches :**
   - Affiche les tâches dans un composant `FlatList`.
   - Passe les données de chaque tâche à un composant enfant `TaskItem`.
4. **Marquer comme fait et supprimer une tâche :**
   - Implémente la logique pour marquer une tâche comme complétée.
   - Ajoute une fonctionnalité pour supprimer une tâche.
5. **UI basique :**
   - Stylise les composants pour les rendre clairs et fonctionnels.
   - Ajoute des états visuels (par exemple, change la couleur d’une tâche lorsqu’elle est complétée).
6. **Tests :**
   - Vérifie que l’ajout, la suppression, et le marquage comme fait fonctionnent correctement.

---

### **4. Bonus**

Si tu termines rapidement le projet, ajoute ces fonctionnalités :

- **Filtrage des tâches :**
  - Ajoute des boutons pour filtrer les tâches (toutes, complétées, non complétées).
- **Animations :**
  - Ajoute une animation subtile lors de l’ajout ou de la suppression de tâches avec **React Native Reanimated**.

---

### **5. Résultat attendu**

Une application TODO simple avec les fonctionnalités suivantes :

1. Ajouter des tâches.
2. Afficher une liste de tâches.
3. Marquer une tâche comme complétée.
4. Supprimer une tâche.
5. Une interface claire et intuitive, avec une bonne gestion de l’état et des types.
