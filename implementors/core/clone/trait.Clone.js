(function() {var implementors = {};
implementors["arena"] = [{"text":"impl&lt;ID:&nbsp;Clone, V:&nbsp;Clone&gt; Clone for ArenaMap&lt;ID, V&gt;","synthetic":false,"types":[]},{"text":"impl Clone for RawId","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Clone for Idx&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone&gt; Clone for Arena&lt;T&gt;","synthetic":false,"types":[]}];
implementors["assists"] = [{"text":"impl Clone for AssistConfig","synthetic":false,"types":[]},{"text":"impl Clone for MergeBehaviour","synthetic":false,"types":[]},{"text":"impl Clone for TryEnum","synthetic":false,"types":[]},{"text":"impl Clone for AssistKind","synthetic":false,"types":[]},{"text":"impl Clone for AssistId","synthetic":false,"types":[]},{"text":"impl Clone for GroupLabel","synthetic":false,"types":[]},{"text":"impl Clone for Assist","synthetic":false,"types":[]},{"text":"impl Clone for ResolvedAssist","synthetic":false,"types":[]}];
implementors["base_db"] = [{"text":"impl Clone for Canceled","synthetic":false,"types":[]},{"text":"impl Clone for SourceRootId","synthetic":false,"types":[]},{"text":"impl Clone for SourceRoot","synthetic":false,"types":[]},{"text":"impl Clone for CrateGraph","synthetic":false,"types":[]},{"text":"impl Clone for CrateId","synthetic":false,"types":[]},{"text":"impl Clone for CrateName","synthetic":false,"types":[]},{"text":"impl Clone for ProcMacroId","synthetic":false,"types":[]},{"text":"impl Clone for CrateData","synthetic":false,"types":[]},{"text":"impl Clone for Edition","synthetic":false,"types":[]},{"text":"impl Clone for Env","synthetic":false,"types":[]},{"text":"impl Clone for Dependency","synthetic":false,"types":[]},{"text":"impl Clone for FilePosition","synthetic":false,"types":[]},{"text":"impl Clone for FileRange","synthetic":false,"types":[]}];
implementors["cfg"] = [{"text":"impl Clone for CfgExpr","synthetic":false,"types":[]},{"text":"impl Clone for CfgOptions","synthetic":false,"types":[]}];
implementors["flycheck"] = [{"text":"impl Clone for FlycheckConfig","synthetic":false,"types":[]}];
implementors["hir"] = [{"text":"impl Clone for PathResolution","synthetic":false,"types":[]},{"text":"impl Clone for Crate","synthetic":false,"types":[]},{"text":"impl Clone for Module","synthetic":false,"types":[]},{"text":"impl Clone for ModuleDef","synthetic":false,"types":[]},{"text":"impl Clone for Field","synthetic":false,"types":[]},{"text":"impl Clone for Struct","synthetic":false,"types":[]},{"text":"impl Clone for Union","synthetic":false,"types":[]},{"text":"impl Clone for Enum","synthetic":false,"types":[]},{"text":"impl Clone for EnumVariant","synthetic":false,"types":[]},{"text":"impl Clone for Adt","synthetic":false,"types":[]},{"text":"impl Clone for VariantDef","synthetic":false,"types":[]},{"text":"impl Clone for DefWithBody","synthetic":false,"types":[]},{"text":"impl Clone for Function","synthetic":false,"types":[]},{"text":"impl Clone for Const","synthetic":false,"types":[]},{"text":"impl Clone for Static","synthetic":false,"types":[]},{"text":"impl Clone for Trait","synthetic":false,"types":[]},{"text":"impl Clone for TypeAlias","synthetic":false,"types":[]},{"text":"impl Clone for MacroDef","synthetic":false,"types":[]},{"text":"impl Clone for AssocItem","synthetic":false,"types":[]},{"text":"impl Clone for GenericDef","synthetic":false,"types":[]},{"text":"impl Clone for Local","synthetic":false,"types":[]},{"text":"impl Clone for TypeParam","synthetic":false,"types":[]},{"text":"impl Clone for ImplDef","synthetic":false,"types":[]},{"text":"impl Clone for Type","synthetic":false,"types":[]},{"text":"impl Clone for Namespace","synthetic":false,"types":[]}];
implementors["hir_def"] = [{"text":"impl Clone for Attrs","synthetic":false,"types":[]},{"text":"impl Clone for Attr","synthetic":false,"types":[]},{"text":"impl Clone for AttrInput","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Clone for AttrQuery&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl Clone for ModPath","synthetic":false,"types":[]},{"text":"impl Clone for PathKind","synthetic":false,"types":[]},{"text":"impl Clone for ImportAlias","synthetic":false,"types":[]},{"text":"impl Clone for Path","synthetic":false,"types":[]},{"text":"impl Clone for GenericArgs","synthetic":false,"types":[]},{"text":"impl Clone for AssociatedTypeBinding","synthetic":false,"types":[]},{"text":"impl Clone for GenericArg","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Clone for PathSegment&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl Clone for Mutability","synthetic":false,"types":[]},{"text":"impl Clone for Rawness","synthetic":false,"types":[]},{"text":"impl Clone for TypeRef","synthetic":false,"types":[]},{"text":"impl Clone for TypeBound","synthetic":false,"types":[]},{"text":"impl Clone for Signedness","synthetic":false,"types":[]},{"text":"impl Clone for IntBitness","synthetic":false,"types":[]},{"text":"impl Clone for FloatBitness","synthetic":false,"types":[]},{"text":"impl Clone for BuiltinInt","synthetic":false,"types":[]},{"text":"impl Clone for BuiltinFloat","synthetic":false,"types":[]},{"text":"impl Clone for BuiltinType","synthetic":false,"types":[]},{"text":"impl Clone for PerNs","synthetic":false,"types":[]},{"text":"impl Clone for ItemInNs","synthetic":false,"types":[]},{"text":"impl&lt;K, V, P&gt; Clone for Key&lt;K, V, P&gt;","synthetic":false,"types":[]},{"text":"impl Clone for RawVisibilityId","synthetic":false,"types":[]},{"text":"impl Clone for GenericParamsId","synthetic":false,"types":[]},{"text":"impl&lt;N:&nbsp;ItemTreeNode&gt; Clone for FileItemTreeId&lt;N&gt;","synthetic":false,"types":[]},{"text":"impl Clone for ModItem","synthetic":false,"types":[]},{"text":"impl Clone for Import","synthetic":false,"types":[]},{"text":"impl Clone for ExternCrate","synthetic":false,"types":[]},{"text":"impl Clone for Function","synthetic":false,"types":[]},{"text":"impl Clone for Struct","synthetic":false,"types":[]},{"text":"impl Clone for StructDefKind","synthetic":false,"types":[]},{"text":"impl Clone for Union","synthetic":false,"types":[]},{"text":"impl Clone for Enum","synthetic":false,"types":[]},{"text":"impl Clone for Const","synthetic":false,"types":[]},{"text":"impl Clone for Static","synthetic":false,"types":[]},{"text":"impl Clone for Trait","synthetic":false,"types":[]},{"text":"impl Clone for Impl","synthetic":false,"types":[]},{"text":"impl Clone for TypeAlias","synthetic":false,"types":[]},{"text":"impl Clone for Mod","synthetic":false,"types":[]},{"text":"impl Clone for ModKind","synthetic":false,"types":[]},{"text":"impl Clone for MacroCall","synthetic":false,"types":[]},{"text":"impl Clone for Expr","synthetic":false,"types":[]},{"text":"impl Clone for AssocItem","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Clone for IdRange&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl Clone for Fields","synthetic":false,"types":[]},{"text":"impl Clone for Field","synthetic":false,"types":[]},{"text":"impl Clone for StructData","synthetic":false,"types":[]},{"text":"impl Clone for EnumData","synthetic":false,"types":[]},{"text":"impl Clone for EnumVariantData","synthetic":false,"types":[]},{"text":"impl Clone for VariantData","synthetic":false,"types":[]},{"text":"impl Clone for FieldData","synthetic":false,"types":[]},{"text":"impl Clone for ReprKind","synthetic":false,"types":[]},{"text":"impl Clone for StructKind","synthetic":false,"types":[]},{"text":"impl Clone for FunctionData","synthetic":false,"types":[]},{"text":"impl Clone for TypeAliasData","synthetic":false,"types":[]},{"text":"impl Clone for TraitData","synthetic":false,"types":[]},{"text":"impl Clone for ImplData","synthetic":false,"types":[]},{"text":"impl Clone for ConstData","synthetic":false,"types":[]},{"text":"impl Clone for StaticData","synthetic":false,"types":[]},{"text":"impl Clone for TypeParamData","synthetic":false,"types":[]},{"text":"impl Clone for TypeParamProvenance","synthetic":false,"types":[]},{"text":"impl Clone for GenericParams","synthetic":false,"types":[]},{"text":"impl Clone for WherePredicate","synthetic":false,"types":[]},{"text":"impl Clone for WherePredicateTarget","synthetic":false,"types":[]},{"text":"impl Clone for LangItemTarget","synthetic":false,"types":[]},{"text":"impl Clone for LangItems","synthetic":false,"types":[]},{"text":"impl Clone for Documentation","synthetic":false,"types":[]},{"text":"impl Clone for Literal","synthetic":false,"types":[]},{"text":"impl Clone for Expr","synthetic":false,"types":[]},{"text":"impl Clone for BinaryOp","synthetic":false,"types":[]},{"text":"impl Clone for LogicOp","synthetic":false,"types":[]},{"text":"impl Clone for CmpOp","synthetic":false,"types":[]},{"text":"impl Clone for Ordering","synthetic":false,"types":[]},{"text":"impl Clone for ArithOp","synthetic":false,"types":[]},{"text":"impl Clone for Array","synthetic":false,"types":[]},{"text":"impl Clone for MatchArm","synthetic":false,"types":[]},{"text":"impl Clone for RecordLitField","synthetic":false,"types":[]},{"text":"impl Clone for Statement","synthetic":false,"types":[]},{"text":"impl Clone for BindingAnnotation","synthetic":false,"types":[]},{"text":"impl Clone for RecordFieldPat","synthetic":false,"types":[]},{"text":"impl Clone for Pat","synthetic":false,"types":[]},{"text":"impl Clone for SyntheticSyntax","synthetic":false,"types":[]},{"text":"impl Clone for Resolver","synthetic":false,"types":[]},{"text":"impl Clone for TypeNs","synthetic":false,"types":[]},{"text":"impl Clone for ResolveValueResult","synthetic":false,"types":[]},{"text":"impl Clone for ValueNs","synthetic":false,"types":[]},{"text":"impl Clone for ModuleOrigin","synthetic":false,"types":[]},{"text":"impl Clone for ModuleSource","synthetic":false,"types":[]},{"text":"impl Clone for RawVisibility","synthetic":false,"types":[]},{"text":"impl Clone for Visibility","synthetic":false,"types":[]},{"text":"impl Clone for PrefixKind","synthetic":false,"types":[]},{"text":"impl Clone for ImportInfo","synthetic":false,"types":[]},{"text":"impl Clone for ImportPath","synthetic":false,"types":[]},{"text":"impl Clone for ModuleId","synthetic":false,"types":[]},{"text":"impl&lt;N:&nbsp;ItemTreeNode&gt; Clone for ItemLoc&lt;N&gt;","synthetic":false,"types":[]},{"text":"impl&lt;N:&nbsp;ItemTreeNode&gt; Clone for AssocItemLoc&lt;N&gt;","synthetic":false,"types":[]},{"text":"impl Clone for FunctionId","synthetic":false,"types":[]},{"text":"impl Clone for StructId","synthetic":false,"types":[]},{"text":"impl Clone for UnionId","synthetic":false,"types":[]},{"text":"impl Clone for EnumId","synthetic":false,"types":[]},{"text":"impl Clone for EnumVariantId","synthetic":false,"types":[]},{"text":"impl Clone for FieldId","synthetic":false,"types":[]},{"text":"impl Clone for ConstId","synthetic":false,"types":[]},{"text":"impl Clone for StaticId","synthetic":false,"types":[]},{"text":"impl Clone for TraitId","synthetic":false,"types":[]},{"text":"impl Clone for TypeAliasId","synthetic":false,"types":[]},{"text":"impl Clone for ImplId","synthetic":false,"types":[]},{"text":"impl Clone for TypeParamId","synthetic":false,"types":[]},{"text":"impl Clone for ContainerId","synthetic":false,"types":[]},{"text":"impl Clone for AssocContainerId","synthetic":false,"types":[]},{"text":"impl Clone for AdtId","synthetic":false,"types":[]},{"text":"impl Clone for ModuleDefId","synthetic":false,"types":[]},{"text":"impl Clone for DefWithBodyId","synthetic":false,"types":[]},{"text":"impl Clone for AssocItemId","synthetic":false,"types":[]},{"text":"impl Clone for GenericDefId","synthetic":false,"types":[]},{"text":"impl Clone for AttrDefId","synthetic":false,"types":[]},{"text":"impl Clone for VariantId","synthetic":false,"types":[]}];
implementors["hir_expand"] = [{"text":"impl Clone for TokenExpander","synthetic":false,"types":[]},{"text":"impl&lt;N:&nbsp;AstNode&gt; Clone for FileAstId&lt;N&gt;","synthetic":false,"types":[]},{"text":"impl Clone for Name","synthetic":false,"types":[]},{"text":"impl Clone for Hygiene","synthetic":false,"types":[]},{"text":"impl Clone for DiagnosticCode","synthetic":false,"types":[]},{"text":"impl Clone for BuiltinDeriveExpander","synthetic":false,"types":[]},{"text":"impl Clone for BuiltinFnLikeExpander","synthetic":false,"types":[]},{"text":"impl Clone for EagerExpander","synthetic":false,"types":[]},{"text":"impl Clone for ProcMacroExpander","synthetic":false,"types":[]},{"text":"impl Clone for HirFileId","synthetic":false,"types":[]},{"text":"impl Clone for MacroFile","synthetic":false,"types":[]},{"text":"impl Clone for MacroCallId","synthetic":false,"types":[]},{"text":"impl Clone for LazyMacroId","synthetic":false,"types":[]},{"text":"impl Clone for EagerMacroId","synthetic":false,"types":[]},{"text":"impl Clone for MacroDefId","synthetic":false,"types":[]},{"text":"impl Clone for MacroDefKind","synthetic":false,"types":[]},{"text":"impl Clone for MacroCallLoc","synthetic":false,"types":[]},{"text":"impl Clone for MacroCallKind","synthetic":false,"types":[]},{"text":"impl Clone for EagerCallLoc","synthetic":false,"types":[]},{"text":"impl Clone for ExpansionInfo","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone&gt; Clone for InFile&lt;T&gt;","synthetic":false,"types":[]}];
implementors["hir_ty"] = [{"text":"impl Clone for IntTy","synthetic":false,"types":[]},{"text":"impl Clone for FloatTy","synthetic":false,"types":[]},{"text":"impl Clone for TraitEnvironment","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone&gt; Clone for InEnvironment&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl Clone for Obligation","synthetic":false,"types":[]},{"text":"impl Clone for ProjectionPredicate","synthetic":false,"types":[]},{"text":"impl Clone for SolutionVariables","synthetic":false,"types":[]},{"text":"impl Clone for Solution","synthetic":false,"types":[]},{"text":"impl Clone for Guidance","synthetic":false,"types":[]},{"text":"impl Clone for FnTrait","synthetic":false,"types":[]},{"text":"impl Clone for TyFingerprint","synthetic":false,"types":[]},{"text":"impl Clone for LookupMode","synthetic":false,"types":[]},{"text":"impl Clone for ImplTraitLoweringMode","synthetic":false,"types":[]},{"text":"impl Clone for CallableDefId","synthetic":false,"types":[]},{"text":"impl Clone for TyDefId","synthetic":false,"types":[]},{"text":"impl Clone for ValueTyDefId","synthetic":false,"types":[]},{"text":"impl Clone for InferenceResult","synthetic":false,"types":[]},{"text":"impl Clone for InferTy","synthetic":false,"types":[]},{"text":"impl Clone for GlobalTypeParamId","synthetic":false,"types":[]},{"text":"impl Clone for InternedOpaqueTyId","synthetic":false,"types":[]},{"text":"impl Clone for ClosureId","synthetic":false,"types":[]},{"text":"impl Clone for InternedCallableDefId","synthetic":false,"types":[]},{"text":"impl Clone for TypeCtor","synthetic":false,"types":[]},{"text":"impl Clone for ApplicationTy","synthetic":false,"types":[]},{"text":"impl Clone for OpaqueTy","synthetic":false,"types":[]},{"text":"impl Clone for ProjectionTy","synthetic":false,"types":[]},{"text":"impl Clone for Ty","synthetic":false,"types":[]},{"text":"impl Clone for Substs","synthetic":false,"types":[]},{"text":"impl Clone for SubstsBuilder","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone&gt; Clone for Binders&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl Clone for TraitRef","synthetic":false,"types":[]},{"text":"impl Clone for GenericPredicate","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone&gt; Clone for Canonical&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl Clone for TyKind","synthetic":false,"types":[]},{"text":"impl Clone for FnSig","synthetic":false,"types":[]},{"text":"impl Clone for OpaqueTyId","synthetic":false,"types":[]},{"text":"impl Clone for ReturnTypeImplTraits","synthetic":false,"types":[]}];
implementors["ide"] = [{"text":"impl Clone for NavigationTarget","synthetic":false,"types":[]},{"text":"impl Clone for CallItem","synthetic":false,"types":[]},{"text":"impl Clone for CompletionConfig","synthetic":false,"types":[]},{"text":"impl Clone for CompletionScore","synthetic":false,"types":[]},{"text":"impl Clone for CompletionItemKind","synthetic":false,"types":[]},{"text":"impl Clone for InsertTextFormat","synthetic":false,"types":[]},{"text":"impl Clone for Severity","synthetic":false,"types":[]},{"text":"impl Clone for DiagnosticsConfig","synthetic":false,"types":[]},{"text":"impl Clone for StructureNode","synthetic":false,"types":[]},{"text":"impl Clone for HoverConfig","synthetic":false,"types":[]},{"text":"impl Clone for HoverAction","synthetic":false,"types":[]},{"text":"impl Clone for HoverGotoTypeData","synthetic":false,"types":[]},{"text":"impl Clone for InlayHintsConfig","synthetic":false,"types":[]},{"text":"impl Clone for InlayKind","synthetic":false,"types":[]},{"text":"impl Clone for ReferenceSearchResult","synthetic":false,"types":[]},{"text":"impl Clone for Declaration","synthetic":false,"types":[]},{"text":"impl Clone for Runnable","synthetic":false,"types":[]},{"text":"impl Clone for TestId","synthetic":false,"types":[]},{"text":"impl Clone for RunnableKind","synthetic":false,"types":[]},{"text":"impl Clone for Highlight","synthetic":false,"types":[]},{"text":"impl Clone for HighlightModifiers","synthetic":false,"types":[]},{"text":"impl Clone for HighlightTag","synthetic":false,"types":[]},{"text":"impl Clone for HighlightModifier","synthetic":false,"types":[]},{"text":"impl Clone for HighlightedRange","synthetic":false,"types":[]}];
implementors["ide_db"] = [{"text":"impl Clone for Label","synthetic":false,"types":[]},{"text":"impl Clone for LineIndex","synthetic":false,"types":[]},{"text":"impl Clone for LineCol","synthetic":false,"types":[]},{"text":"impl Clone for FileSymbol","synthetic":false,"types":[]},{"text":"impl Clone for Definition","synthetic":false,"types":[]},{"text":"impl Clone for Reference","synthetic":false,"types":[]},{"text":"impl Clone for ReferenceKind","synthetic":false,"types":[]},{"text":"impl Clone for ReferenceAccess","synthetic":false,"types":[]},{"text":"impl Clone for SourceChange","synthetic":false,"types":[]},{"text":"impl Clone for SourceFileEdit","synthetic":false,"types":[]},{"text":"impl Clone for FileSystemEdit","synthetic":false,"types":[]}];
implementors["mbe"] = [{"text":"impl Clone for TokenMap","synthetic":false,"types":[]},{"text":"impl Clone for ExpandError","synthetic":false,"types":[]},{"text":"impl Clone for MacroRules","synthetic":false,"types":[]}];
implementors["parser"] = [{"text":"impl Clone for SyntaxKind","synthetic":false,"types":[]},{"text":"impl Clone for ParseError","synthetic":false,"types":[]},{"text":"impl Clone for Token","synthetic":false,"types":[]},{"text":"impl Clone for FragmentKind","synthetic":false,"types":[]}];
implementors["paths"] = [{"text":"impl Clone for AbsPathBuf","synthetic":false,"types":[]},{"text":"impl Clone for RelPathBuf","synthetic":false,"types":[]}];
implementors["proc_macro_api"] = [{"text":"impl Clone for ListMacrosTask","synthetic":false,"types":[]},{"text":"impl Clone for ProcMacroKind","synthetic":false,"types":[]},{"text":"impl Clone for ListMacrosResult","synthetic":false,"types":[]},{"text":"impl Clone for ExpansionTask","synthetic":false,"types":[]},{"text":"impl Clone for ExpansionResult","synthetic":false,"types":[]},{"text":"impl Clone for Request","synthetic":false,"types":[]},{"text":"impl Clone for Response","synthetic":false,"types":[]},{"text":"impl Clone for ResponseError","synthetic":false,"types":[]},{"text":"impl Clone for ErrorCode","synthetic":false,"types":[]},{"text":"impl Clone for ProcMacroProcessExpander","synthetic":false,"types":[]}];
implementors["profile"] = [{"text":"impl Clone for MemoryUsage","synthetic":false,"types":[]},{"text":"impl Clone for Bytes","synthetic":false,"types":[]}];
implementors["project_model"] = [{"text":"impl Clone for CargoWorkspace","synthetic":false,"types":[]},{"text":"impl Clone for CargoConfig","synthetic":false,"types":[]},{"text":"impl Clone for TargetKind","synthetic":false,"types":[]},{"text":"impl Clone for ProjectJson","synthetic":false,"types":[]},{"text":"impl Clone for Sysroot","synthetic":false,"types":[]},{"text":"impl Clone for ProjectWorkspace","synthetic":false,"types":[]},{"text":"impl Clone for PackageRoot","synthetic":false,"types":[]},{"text":"impl Clone for ProjectManifest","synthetic":false,"types":[]}];
implementors["rust_analyzer"] = [{"text":"impl Clone for Verbosity","synthetic":false,"types":[]},{"text":"impl Clone for ResolveCodeActionParams","synthetic":false,"types":[]},{"text":"impl Clone for CodeAction","synthetic":false,"types":[]},{"text":"impl Clone for SnippetWorkspaceEdit","synthetic":false,"types":[]},{"text":"impl Clone for SnippetDocumentChangeOperation","synthetic":false,"types":[]},{"text":"impl Clone for SnippetTextDocumentEdit","synthetic":false,"types":[]},{"text":"impl Clone for SnippetTextEdit","synthetic":false,"types":[]},{"text":"impl Clone for Hover","synthetic":false,"types":[]},{"text":"impl Clone for CommandLinkGroup","synthetic":false,"types":[]},{"text":"impl Clone for CommandLink","synthetic":false,"types":[]},{"text":"impl Clone for Config","synthetic":false,"types":[]},{"text":"impl Clone for LinkedProject","synthetic":false,"types":[]},{"text":"impl Clone for LensConfig","synthetic":false,"types":[]},{"text":"impl Clone for FilesConfig","synthetic":false,"types":[]},{"text":"impl Clone for FilesWatcher","synthetic":false,"types":[]},{"text":"impl Clone for NotificationsConfig","synthetic":false,"types":[]},{"text":"impl Clone for RustfmtConfig","synthetic":false,"types":[]},{"text":"impl Clone for RunnablesConfig","synthetic":false,"types":[]},{"text":"impl Clone for ClientCapsConfig","synthetic":false,"types":[]}];
implementors["syntax"] = [{"text":"impl Clone for SyntaxError","synthetic":false,"types":[]},{"text":"impl Clone for Token","synthetic":false,"types":[]},{"text":"impl Clone for SyntaxNodePtr","synthetic":false,"types":[]},{"text":"impl&lt;N:&nbsp;AstNode&gt; Clone for AstPtr&lt;N&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T:&nbsp;Clone&gt; Clone for InsertPosition&lt;T&gt;","synthetic":false,"types":[]},{"text":"impl Clone for Name","synthetic":false,"types":[]},{"text":"impl Clone for NameRef","synthetic":false,"types":[]},{"text":"impl Clone for Path","synthetic":false,"types":[]},{"text":"impl Clone for PathSegment","synthetic":false,"types":[]},{"text":"impl Clone for GenericArgList","synthetic":false,"types":[]},{"text":"impl Clone for ParamList","synthetic":false,"types":[]},{"text":"impl Clone for RetType","synthetic":false,"types":[]},{"text":"impl Clone for PathType","synthetic":false,"types":[]},{"text":"impl Clone for TypeArg","synthetic":false,"types":[]},{"text":"impl Clone for AssocTypeArg","synthetic":false,"types":[]},{"text":"impl Clone for LifetimeArg","synthetic":false,"types":[]},{"text":"impl Clone for ConstArg","synthetic":false,"types":[]},{"text":"impl Clone for TypeBoundList","synthetic":false,"types":[]},{"text":"impl Clone for MacroCall","synthetic":false,"types":[]},{"text":"impl Clone for Attr","synthetic":false,"types":[]},{"text":"impl Clone for TokenTree","synthetic":false,"types":[]},{"text":"impl Clone for MacroItems","synthetic":false,"types":[]},{"text":"impl Clone for MacroStmts","synthetic":false,"types":[]},{"text":"impl Clone for SourceFile","synthetic":false,"types":[]},{"text":"impl Clone for Const","synthetic":false,"types":[]},{"text":"impl Clone for Enum","synthetic":false,"types":[]},{"text":"impl Clone for ExternBlock","synthetic":false,"types":[]},{"text":"impl Clone for ExternCrate","synthetic":false,"types":[]},{"text":"impl Clone for Fn","synthetic":false,"types":[]},{"text":"impl Clone for Impl","synthetic":false,"types":[]},{"text":"impl Clone for Module","synthetic":false,"types":[]},{"text":"impl Clone for Static","synthetic":false,"types":[]},{"text":"impl Clone for Struct","synthetic":false,"types":[]},{"text":"impl Clone for Trait","synthetic":false,"types":[]},{"text":"impl Clone for TypeAlias","synthetic":false,"types":[]},{"text":"impl Clone for Union","synthetic":false,"types":[]},{"text":"impl Clone for Use","synthetic":false,"types":[]},{"text":"impl Clone for Visibility","synthetic":false,"types":[]},{"text":"impl Clone for ItemList","synthetic":false,"types":[]},{"text":"impl Clone for Rename","synthetic":false,"types":[]},{"text":"impl Clone for UseTree","synthetic":false,"types":[]},{"text":"impl Clone for UseTreeList","synthetic":false,"types":[]},{"text":"impl Clone for Abi","synthetic":false,"types":[]},{"text":"impl Clone for GenericParamList","synthetic":false,"types":[]},{"text":"impl Clone for WhereClause","synthetic":false,"types":[]},{"text":"impl Clone for BlockExpr","synthetic":false,"types":[]},{"text":"impl Clone for SelfParam","synthetic":false,"types":[]},{"text":"impl Clone for Param","synthetic":false,"types":[]},{"text":"impl Clone for RecordFieldList","synthetic":false,"types":[]},{"text":"impl Clone for TupleFieldList","synthetic":false,"types":[]},{"text":"impl Clone for RecordField","synthetic":false,"types":[]},{"text":"impl Clone for TupleField","synthetic":false,"types":[]},{"text":"impl Clone for VariantList","synthetic":false,"types":[]},{"text":"impl Clone for Variant","synthetic":false,"types":[]},{"text":"impl Clone for AssocItemList","synthetic":false,"types":[]},{"text":"impl Clone for ExternItemList","synthetic":false,"types":[]},{"text":"impl Clone for ConstParam","synthetic":false,"types":[]},{"text":"impl Clone for LifetimeParam","synthetic":false,"types":[]},{"text":"impl Clone for TypeParam","synthetic":false,"types":[]},{"text":"impl Clone for WherePred","synthetic":false,"types":[]},{"text":"impl Clone for Literal","synthetic":false,"types":[]},{"text":"impl Clone for ExprStmt","synthetic":false,"types":[]},{"text":"impl Clone for LetStmt","synthetic":false,"types":[]},{"text":"impl Clone for ArrayExpr","synthetic":false,"types":[]},{"text":"impl Clone for AwaitExpr","synthetic":false,"types":[]},{"text":"impl Clone for BinExpr","synthetic":false,"types":[]},{"text":"impl Clone for BoxExpr","synthetic":false,"types":[]},{"text":"impl Clone for BreakExpr","synthetic":false,"types":[]},{"text":"impl Clone for CallExpr","synthetic":false,"types":[]},{"text":"impl Clone for CastExpr","synthetic":false,"types":[]},{"text":"impl Clone for ClosureExpr","synthetic":false,"types":[]},{"text":"impl Clone for ContinueExpr","synthetic":false,"types":[]},{"text":"impl Clone for EffectExpr","synthetic":false,"types":[]},{"text":"impl Clone for FieldExpr","synthetic":false,"types":[]},{"text":"impl Clone for ForExpr","synthetic":false,"types":[]},{"text":"impl Clone for IfExpr","synthetic":false,"types":[]},{"text":"impl Clone for IndexExpr","synthetic":false,"types":[]},{"text":"impl Clone for LoopExpr","synthetic":false,"types":[]},{"text":"impl Clone for MatchExpr","synthetic":false,"types":[]},{"text":"impl Clone for MethodCallExpr","synthetic":false,"types":[]},{"text":"impl Clone for ParenExpr","synthetic":false,"types":[]},{"text":"impl Clone for PathExpr","synthetic":false,"types":[]},{"text":"impl Clone for PrefixExpr","synthetic":false,"types":[]},{"text":"impl Clone for RangeExpr","synthetic":false,"types":[]},{"text":"impl Clone for RecordExpr","synthetic":false,"types":[]},{"text":"impl Clone for RefExpr","synthetic":false,"types":[]},{"text":"impl Clone for ReturnExpr","synthetic":false,"types":[]},{"text":"impl Clone for TryExpr","synthetic":false,"types":[]},{"text":"impl Clone for TupleExpr","synthetic":false,"types":[]},{"text":"impl Clone for WhileExpr","synthetic":false,"types":[]},{"text":"impl Clone for Label","synthetic":false,"types":[]},{"text":"impl Clone for RecordExprFieldList","synthetic":false,"types":[]},{"text":"impl Clone for RecordExprField","synthetic":false,"types":[]},{"text":"impl Clone for ArgList","synthetic":false,"types":[]},{"text":"impl Clone for Condition","synthetic":false,"types":[]},{"text":"impl Clone for MatchArmList","synthetic":false,"types":[]},{"text":"impl Clone for MatchArm","synthetic":false,"types":[]},{"text":"impl Clone for MatchGuard","synthetic":false,"types":[]},{"text":"impl Clone for ArrayType","synthetic":false,"types":[]},{"text":"impl Clone for DynTraitType","synthetic":false,"types":[]},{"text":"impl Clone for FnPtrType","synthetic":false,"types":[]},{"text":"impl Clone for ForType","synthetic":false,"types":[]},{"text":"impl Clone for ImplTraitType","synthetic":false,"types":[]},{"text":"impl Clone for InferType","synthetic":false,"types":[]},{"text":"impl Clone for NeverType","synthetic":false,"types":[]},{"text":"impl Clone for ParenType","synthetic":false,"types":[]},{"text":"impl Clone for PtrType","synthetic":false,"types":[]},{"text":"impl Clone for RefType","synthetic":false,"types":[]},{"text":"impl Clone for SliceType","synthetic":false,"types":[]},{"text":"impl Clone for TupleType","synthetic":false,"types":[]},{"text":"impl Clone for TypeBound","synthetic":false,"types":[]},{"text":"impl Clone for IdentPat","synthetic":false,"types":[]},{"text":"impl Clone for BoxPat","synthetic":false,"types":[]},{"text":"impl Clone for RestPat","synthetic":false,"types":[]},{"text":"impl Clone for LiteralPat","synthetic":false,"types":[]},{"text":"impl Clone for MacroPat","synthetic":false,"types":[]},{"text":"impl Clone for OrPat","synthetic":false,"types":[]},{"text":"impl Clone for ParenPat","synthetic":false,"types":[]},{"text":"impl Clone for PathPat","synthetic":false,"types":[]},{"text":"impl Clone for WildcardPat","synthetic":false,"types":[]},{"text":"impl Clone for RangePat","synthetic":false,"types":[]},{"text":"impl Clone for RecordPat","synthetic":false,"types":[]},{"text":"impl Clone for RefPat","synthetic":false,"types":[]},{"text":"impl Clone for SlicePat","synthetic":false,"types":[]},{"text":"impl Clone for TuplePat","synthetic":false,"types":[]},{"text":"impl Clone for TupleStructPat","synthetic":false,"types":[]},{"text":"impl Clone for RecordPatFieldList","synthetic":false,"types":[]},{"text":"impl Clone for RecordPatField","synthetic":false,"types":[]},{"text":"impl Clone for GenericArg","synthetic":false,"types":[]},{"text":"impl Clone for Type","synthetic":false,"types":[]},{"text":"impl Clone for Expr","synthetic":false,"types":[]},{"text":"impl Clone for Item","synthetic":false,"types":[]},{"text":"impl Clone for Stmt","synthetic":false,"types":[]},{"text":"impl Clone for Pat","synthetic":false,"types":[]},{"text":"impl Clone for FieldList","synthetic":false,"types":[]},{"text":"impl Clone for AdtDef","synthetic":false,"types":[]},{"text":"impl Clone for AssocItem","synthetic":false,"types":[]},{"text":"impl Clone for ExternItem","synthetic":false,"types":[]},{"text":"impl Clone for GenericParam","synthetic":false,"types":[]},{"text":"impl Clone for Whitespace","synthetic":false,"types":[]},{"text":"impl Clone for Comment","synthetic":false,"types":[]},{"text":"impl Clone for String","synthetic":false,"types":[]},{"text":"impl Clone for RawString","synthetic":false,"types":[]},{"text":"impl Clone for CommentKind","synthetic":false,"types":[]},{"text":"impl Clone for CommentShape","synthetic":false,"types":[]},{"text":"impl Clone for CommentPlacement","synthetic":false,"types":[]},{"text":"impl Clone for AttrKind","synthetic":false,"types":[]},{"text":"impl Clone for PathSegmentKind","synthetic":false,"types":[]},{"text":"impl Clone for StructKind","synthetic":false,"types":[]},{"text":"impl Clone for FieldKind","synthetic":false,"types":[]},{"text":"impl Clone for SelfParamKind","synthetic":false,"types":[]},{"text":"impl Clone for TypeBoundKind","synthetic":false,"types":[]},{"text":"impl Clone for ElseBranch","synthetic":false,"types":[]},{"text":"impl Clone for PrefixOp","synthetic":false,"types":[]},{"text":"impl Clone for BinOp","synthetic":false,"types":[]},{"text":"impl Clone for RangeOp","synthetic":false,"types":[]},{"text":"impl Clone for LiteralKind","synthetic":false,"types":[]},{"text":"impl Clone for Effect","synthetic":false,"types":[]},{"text":"impl Clone for IndentLevel","synthetic":false,"types":[]},{"text":"impl&lt;N:&nbsp;Clone&gt; Clone for AstChildren&lt;N&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Clone for Parse&lt;T&gt;","synthetic":false,"types":[]}];
implementors["test_utils"] = [{"text":"impl Clone for RangeOrOffset","synthetic":false,"types":[]}];
implementors["text_edit"] = [{"text":"impl Clone for Indel","synthetic":false,"types":[]},{"text":"impl Clone for TextEdit","synthetic":false,"types":[]},{"text":"impl Clone for TextEditBuilder","synthetic":false,"types":[]}];
implementors["tt"] = [{"text":"impl Clone for TokenId","synthetic":false,"types":[]},{"text":"impl Clone for TokenTree","synthetic":false,"types":[]},{"text":"impl Clone for Leaf","synthetic":false,"types":[]},{"text":"impl Clone for Subtree","synthetic":false,"types":[]},{"text":"impl Clone for Delimiter","synthetic":false,"types":[]},{"text":"impl Clone for DelimiterKind","synthetic":false,"types":[]},{"text":"impl Clone for Literal","synthetic":false,"types":[]},{"text":"impl Clone for Punct","synthetic":false,"types":[]},{"text":"impl Clone for Spacing","synthetic":false,"types":[]},{"text":"impl Clone for Ident","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Clone for Cursor&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl Clone for ExpansionError","synthetic":false,"types":[]}];
implementors["vfs"] = [{"text":"impl Clone for VfsPath","synthetic":false,"types":[]},{"text":"impl Clone for FileSet","synthetic":false,"types":[]},{"text":"impl Clone for Entry","synthetic":false,"types":[]},{"text":"impl Clone for Directories","synthetic":false,"types":[]},{"text":"impl Clone for FileId","synthetic":false,"types":[]},{"text":"impl Clone for ChangeKind","synthetic":false,"types":[]}];
implementors["xtask"] = [{"text":"impl Clone for Mode","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()