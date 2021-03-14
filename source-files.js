var N = null;var sourcesIndex = {};
sourcesIndex["adler"] = {"name":"","files":["algo.rs","lib.rs"]};
sourcesIndex["ahash"] = {"name":"","files":["convert.rs","fallback_hash.rs","hash_map.rs","hash_set.rs","lib.rs","operations.rs","random_state.rs","specialize.rs"]};
sourcesIndex["aho_corasick"] = {"name":"","dirs":[{"name":"packed","dirs":[{"name":"teddy","files":["compile.rs","mod.rs","runtime.rs"]}],"files":["api.rs","mod.rs","pattern.rs","rabinkarp.rs","vector.rs"]}],"files":["ahocorasick.rs","automaton.rs","buffer.rs","byte_frequencies.rs","classes.rs","dfa.rs","error.rs","lib.rs","nfa.rs","prefilter.rs","state_id.rs"]};
sourcesIndex["alloc_no_stdlib"] = {"name":"","dirs":[{"name":"allocated_memory","files":["index_macro.rs","mod.rs"]}],"files":["allocated_stack_memory.rs","init.rs","lib.rs","stack_allocator.rs"]};
sourcesIndex["alloc_stdlib"] = {"name":"","files":["heap_alloc.rs","lib.rs","std_alloc.rs"]};
sourcesIndex["anyhow"] = {"name":"","files":["backtrace.rs","chain.rs","context.rs","error.rs","fmt.rs","kind.rs","lib.rs","macros.rs","ptr.rs","wrapper.rs"]};
sourcesIndex["arrayvec"] = {"name":"","files":["array.rs","array_string.rs","char.rs","errors.rs","lib.rs","maybe_uninit.rs"]};
sourcesIndex["arrow"] = {"name":"","dirs":[{"name":"alloc","files":["alignment.rs","mod.rs","types.rs"]},{"name":"arch","files":["mod.rs"]},{"name":"array","dirs":[{"name":"equal","files":["boolean.rs","decimal.rs","dictionary.rs","fixed_binary.rs","fixed_list.rs","list.rs","mod.rs","null.rs","primitive.rs","structure.rs","utils.rs","variable_size.rs"]},{"name":"transform","files":["boolean.rs","fixed_binary.rs","list.rs","mod.rs","null.rs","primitive.rs","structure.rs","utils.rs","variable_size.rs"]}],"files":["array.rs","array_binary.rs","array_boolean.rs","array_dictionary.rs","array_list.rs","array_primitive.rs","array_string.rs","array_struct.rs","array_union.rs","builder.rs","cast.rs","data.rs","equal_json.rs","ffi.rs","iterator.rs","mod.rs","null.rs","ord.rs","raw_pointer.rs"]},{"name":"buffer","files":["immutable.rs","mod.rs","mutable.rs","ops.rs"]},{"name":"compute","dirs":[{"name":"kernels","files":["aggregate.rs","arithmetic.rs","arity.rs","boolean.rs","cast.rs","cast_utils.rs","comparison.rs","concat.rs","filter.rs","length.rs","limit.rs","mod.rs","sort.rs","substring.rs","take.rs","temporal.rs","window.rs","zip.rs"]}],"files":["mod.rs","util.rs"]},{"name":"csv","files":["mod.rs","reader.rs","writer.rs"]},{"name":"datatypes","files":["datatype.rs","field.rs","mod.rs","native.rs","numeric.rs","schema.rs","types.rs"]},{"name":"ipc","dirs":[{"name":"gen","files":["File.rs","Message.rs","Schema.rs","SparseTensor.rs","Tensor.rs","mod.rs"]}],"files":["convert.rs","mod.rs","reader.rs","writer.rs"]},{"name":"json","files":["mod.rs","reader.rs","writer.rs"]},{"name":"util","files":["bench_util.rs","bit_chunk_iterator.rs","bit_util.rs","display.rs","integration_util.rs","mod.rs","serialization.rs","string_writer.rs","test_util.rs","trusted_len.rs"]}],"files":["bitmap.rs","bytes.rs","error.rs","ffi.rs","lib.rs","record_batch.rs","temporal_conversions.rs","tensor.rs","zz_memory_check.rs"]};
sourcesIndex["atty"] = {"name":"","files":["lib.rs"]};
sourcesIndex["base64"] = {"name":"","dirs":[{"name":"read","files":["decoder.rs","mod.rs"]},{"name":"write","files":["encoder.rs","mod.rs"]}],"files":["chunked_encoder.rs","decode.rs","display.rs","encode.rs","lib.rs","tables.rs"]};
sourcesIndex["bitflags"] = {"name":"","files":["lib.rs"]};
sourcesIndex["brotli"] = {"name":"","dirs":[{"name":"concat","files":["mod.rs"]},{"name":"enc","dirs":[{"name":"backward_references","files":["hash_to_binary_tree.rs","hq.rs","mod.rs"]}],"files":["bit_cost.rs","block_split.rs","block_splitter.rs","brotli_bit_stream.rs","cluster.rs","combined_alloc.rs","command.rs","compat.rs","compress_fragment.rs","compress_fragment_two_pass.rs","constants.rs","context_map_entropy.rs","dictionary_hash.rs","encode.rs","entropy_encode.rs","fast_log.rs","find_stride.rs","fixed_queue.rs","histogram.rs","input_pair.rs","interface.rs","ir_interpret.rs","literal_cost.rs","metablock.rs","mod.rs","multithreading.rs","parameters.rs","pdf.rs","prior_eval.rs","reader.rs","singlethreading.rs","static_dict.rs","static_dict_lut.rs","stride_eval.rs","threading.rs","utf8_util.rs","util.rs","vectorization.rs","weights.rs","worker_pool.rs","writer.rs"]},{"name":"ffi","dirs":[{"name":"multicompress","files":["mod.rs"]}],"files":["alloc_util.rs","broccoli.rs","compressor.rs","decompressor.rs","mod.rs"]}],"files":["lib.rs"]};
sourcesIndex["brotli_decompressor"] = {"name":"","dirs":[{"name":"bit_reader","files":["mod.rs"]},{"name":"dictionary","files":["mod.rs"]},{"name":"ffi","files":["alloc_util.rs","interface.rs","mod.rs"]},{"name":"huffman","files":["mod.rs","tests.rs"]}],"files":["brotli_alloc.rs","context.rs","decode.rs","io_wrappers.rs","lib.rs","memory.rs","prefix.rs","reader.rs","state.rs","transform.rs","writer.rs"]};
sourcesIndex["bstr"] = {"name":"","dirs":[{"name":"byteset","files":["mod.rs","scalar.rs"]},{"name":"search","files":["byte_frequencies.rs","mod.rs","prefilter.rs","twoway.rs"]},{"name":"unicode","dirs":[{"name":"fsm","files":["grapheme_break_fwd.rs","grapheme_break_rev.rs","mod.rs","regional_indicator_rev.rs","sentence_break_fwd.rs","simple_word_fwd.rs","whitespace_anchored_fwd.rs","whitespace_anchored_rev.rs","word_break_fwd.rs"]}],"files":["grapheme.rs","mod.rs","sentence.rs","whitespace.rs","word.rs"]}],"files":["ascii.rs","bstr.rs","bstring.rs","cow.rs","ext_slice.rs","ext_vec.rs","impls.rs","io.rs","lib.rs","utf8.rs"]};
sourcesIndex["byteorder"] = {"name":"","files":["io.rs","lib.rs"]};
sourcesIndex["cfg_if"] = {"name":"","files":["lib.rs"]};
sourcesIndex["chrono"] = {"name":"","dirs":[{"name":"format","files":["mod.rs","parse.rs","parsed.rs","scan.rs","strftime.rs"]},{"name":"naive","files":["date.rs","datetime.rs","internals.rs","isoweek.rs","time.rs"]},{"name":"offset","files":["fixed.rs","local.rs","mod.rs","utc.rs"]},{"name":"sys","files":["unix.rs"]}],"files":["date.rs","datetime.rs","div.rs","lib.rs","round.rs","sys.rs"]};
sourcesIndex["comfy_table"] = {"name":"","dirs":[{"name":"style","files":["cell.rs","column.rs","mod.rs","modifiers.rs","presets.rs","table.rs"]},{"name":"utils","files":["arrangement.rs","borders.rs","format.rs","mod.rs","split.rs"]}],"files":["cell.rs","column.rs","lib.rs","row.rs","table.rs"]};
sourcesIndex["crc32fast"] = {"name":"","dirs":[{"name":"specialized","files":["mod.rs","pclmulqdq.rs"]}],"files":["baseline.rs","combine.rs","lib.rs","table.rs"]};
sourcesIndex["crossbeam_channel"] = {"name":"","dirs":[{"name":"flavors","files":["array.rs","at.rs","list.rs","mod.rs","never.rs","tick.rs","zero.rs"]}],"files":["channel.rs","context.rs","counter.rs","err.rs","lib.rs","select.rs","select_macro.rs","utils.rs","waker.rs"]};
sourcesIndex["crossbeam_deque"] = {"name":"","files":["deque.rs","lib.rs"]};
sourcesIndex["crossbeam_epoch"] = {"name":"","dirs":[{"name":"sync","files":["list.rs","mod.rs","queue.rs"]}],"files":["atomic.rs","collector.rs","default.rs","deferred.rs","epoch.rs","guard.rs","internal.rs","lib.rs"]};
sourcesIndex["crossbeam_utils"] = {"name":"","dirs":[{"name":"atomic","files":["atomic_cell.rs","consume.rs","mod.rs","seq_lock.rs"]},{"name":"sync","files":["mod.rs","parker.rs","sharded_lock.rs","wait_group.rs"]}],"files":["backoff.rs","cache_padded.rs","lib.rs","thread.rs"]};
sourcesIndex["crossterm"] = {"name":"","dirs":[{"name":"cursor","dirs":[{"name":"sys","files":["unix.rs"]}],"files":["ansi.rs","sys.rs"]},{"name":"event","dirs":[{"name":"source","files":["unix.rs"]},{"name":"sys","dirs":[{"name":"unix","files":["file_descriptor.rs","parse.rs"]}],"files":["unix.rs"]}],"files":["ansi.rs","filter.rs","read.rs","source.rs","sys.rs","timeout.rs"]},{"name":"style","dirs":[{"name":"types","files":["attribute.rs","color.rs","colored.rs","colors.rs"]}],"files":["ansi.rs","attributes.rs","content_style.rs","macros.rs","styled_content.rs","sys.rs","traits.rs","types.rs"]},{"name":"terminal","dirs":[{"name":"sys","files":["unix.rs"]}],"files":["ansi.rs","sys.rs"]}],"files":["command.rs","cursor.rs","error.rs","event.rs","lib.rs","macros.rs","style.rs","terminal.rs","tty.rs"]};
sourcesIndex["csv"] = {"name":"","files":["byte_record.rs","cookbook.rs","deserializer.rs","error.rs","lib.rs","reader.rs","serializer.rs","string_record.rs","tutorial.rs","writer.rs"]};
sourcesIndex["csv_core"] = {"name":"","files":["lib.rs","reader.rs","writer.rs"]};
sourcesIndex["dirs"] = {"name":"","files":["lib.rs","lin.rs","unix.rs"]};
sourcesIndex["either"] = {"name":"","files":["lib.rs"]};
sourcesIndex["encode_unicode"] = {"name":"","files":["decoding_iterators.rs","errors.rs","lib.rs","traits.rs","utf16_char.rs","utf16_iterators.rs","utf8_char.rs","utf8_iterators.rs"]};
sourcesIndex["fast_float"] = {"name":"","files":["binary.rs","common.rs","decimal.rs","float.rs","lib.rs","number.rs","parse.rs","simple.rs","table.rs"]};
sourcesIndex["flatbuffers"] = {"name":"","files":["builder.rs","endian_scalar.rs","follow.rs","get_root.rs","lib.rs","primitives.rs","push.rs","table.rs","vector.rs","verifier.rs","vtable.rs","vtable_writer.rs"]};
sourcesIndex["flate2"] = {"name":"","dirs":[{"name":"deflate","files":["bufread.rs","mod.rs","read.rs","write.rs"]},{"name":"ffi","files":["mod.rs","rust.rs"]},{"name":"gz","files":["bufread.rs","mod.rs","read.rs","write.rs"]},{"name":"zlib","files":["bufread.rs","mod.rs","read.rs","write.rs"]}],"files":["bufreader.rs","crc.rs","lib.rs","mem.rs","zio.rs"]};
sourcesIndex["getrandom"] = {"name":"","files":["error.rs","error_impls.rs","lib.rs","linux_android.rs","use_file.rs","util.rs","util_libc.rs"]};
sourcesIndex["hashbrown"] = {"name":"","dirs":[{"name":"external_trait_impls","dirs":[{"name":"rayon","files":["helpers.rs","map.rs","mod.rs","raw.rs","set.rs"]}],"files":["mod.rs"]},{"name":"raw","files":["bitmask.rs","mod.rs","sse2.rs"]}],"files":["lib.rs","macros.rs","map.rs","scopeguard.rs","set.rs"]};
sourcesIndex["heck"] = {"name":"","files":["camel.rs","kebab.rs","lib.rs","mixed.rs","shouty_kebab.rs","shouty_snake.rs","snake.rs","title.rs"]};
sourcesIndex["hex"] = {"name":"","files":["error.rs","lib.rs"]};
sourcesIndex["indexmap"] = {"name":"","dirs":[{"name":"map","dirs":[{"name":"core","files":["raw.rs"]}],"files":["core.rs"]}],"files":["equivalent.rs","lib.rs","macros.rs","map.rs","mutable_keys.rs","set.rs","util.rs"]};
sourcesIndex["instant"] = {"name":"","files":["lib.rs","native.rs"]};
sourcesIndex["integer_encoding"] = {"name":"","files":["fixed.rs","fixed_tests.rs","lib.rs","reader.rs","varint.rs","varint_tests.rs","writer.rs"]};
sourcesIndex["itertools"] = {"name":"","dirs":[{"name":"adaptors","files":["coalesce.rs","map.rs","mod.rs","multi_product.rs"]}],"files":["combinations.rs","combinations_with_replacement.rs","concat_impl.rs","cons_tuples_impl.rs","diff.rs","either_or_both.rs","exactly_one_err.rs","format.rs","free.rs","group_map.rs","groupbylazy.rs","grouping_map.rs","impl_macros.rs","intersperse.rs","k_smallest.rs","kmerge_impl.rs","lazy_buffer.rs","lib.rs","merge_join.rs","minmax.rs","multipeek_impl.rs","pad_tail.rs","peek_nth.rs","peeking_take_while.rs","permutations.rs","powerset.rs","process_results_impl.rs","put_back_n_impl.rs","rciter_impl.rs","repeatn.rs","size_hint.rs","sources.rs","tee.rs","tuple_impl.rs","unique_impl.rs","with_position.rs","zip_eq_impl.rs","zip_longest.rs","ziptuple.rs"]};
sourcesIndex["itoa"] = {"name":"","files":["lib.rs"]};
sourcesIndex["lazy_static"] = {"name":"","files":["inline_lazy.rs","lib.rs"]};
sourcesIndex["lexical"] = {"name":"","files":["lib.rs"]};
sourcesIndex["lexical_core"] = {"name":"","dirs":[{"name":"atof","dirs":[{"name":"algorithm","dirs":[{"name":"format","files":["exponent.rs","interface.rs","mod.rs","standard.rs","traits.rs","trim.rs","validate.rs"]}],"files":["alias.rs","bhcomp.rs","bigcomp.rs","bignum.rs","cached.rs","cached_float160.rs","cached_float80.rs","correct.rs","errors.rs","large_powers.rs","large_powers_64.rs","math.rs","mod.rs","small_powers.rs","small_powers_64.rs"]}],"files":["api.rs","mod.rs"]},{"name":"atoi","files":["api.rs","exponent.rs","generic.rs","mantissa.rs","mod.rs","shared.rs"]},{"name":"float","files":["convert.rs","float.rs","mantissa.rs","mod.rs","rounding.rs","shift.rs"]},{"name":"ftoa","files":["api.rs","mod.rs","ryu.rs"]},{"name":"itoa","files":["api.rs","decimal.rs","mod.rs"]},{"name":"util","files":["algorithm.rs","assert.rs","cast.rs","config.rs","consume.rs","div128.rs","error.rs","format.rs","index.rs","iterator.rs","mask.rs","mod.rs","num.rs","perftools.rs","pow.rs","primitive.rs","result.rs","rounding.rs","sequence.rs","sign.rs","table.rs","traits.rs"]}],"files":["lib.rs"]};
sourcesIndex["libc"] = {"name":"","dirs":[{"name":"unix","dirs":[{"name":"linux_like","dirs":[{"name":"linux","dirs":[{"name":"gnu","dirs":[{"name":"b64","dirs":[{"name":"x86_64","files":["align.rs","mod.rs","not_x32.rs"]}],"files":["mod.rs"]}],"files":["align.rs","mod.rs"]}],"files":["align.rs","mod.rs"]}],"files":["mod.rs"]}],"files":["align.rs","mod.rs"]}],"files":["fixed_width_ints.rs","lib.rs","macros.rs"]};
sourcesIndex["libm"] = {"name":"","dirs":[{"name":"math","files":["acos.rs","acosf.rs","acosh.rs","acoshf.rs","asin.rs","asinf.rs","asinh.rs","asinhf.rs","atan.rs","atan2.rs","atan2f.rs","atanf.rs","atanh.rs","atanhf.rs","cbrt.rs","cbrtf.rs","ceil.rs","ceilf.rs","copysign.rs","copysignf.rs","cos.rs","cosf.rs","cosh.rs","coshf.rs","erf.rs","erff.rs","exp.rs","exp10.rs","exp10f.rs","exp2.rs","exp2f.rs","expf.rs","expm1.rs","expm1f.rs","expo2.rs","fabs.rs","fabsf.rs","fdim.rs","fdimf.rs","fenv.rs","floor.rs","floorf.rs","fma.rs","fmaf.rs","fmax.rs","fmaxf.rs","fmin.rs","fminf.rs","fmod.rs","fmodf.rs","frexp.rs","frexpf.rs","hypot.rs","hypotf.rs","ilogb.rs","ilogbf.rs","j0.rs","j0f.rs","j1.rs","j1f.rs","jn.rs","jnf.rs","k_cos.rs","k_cosf.rs","k_expo2.rs","k_expo2f.rs","k_sin.rs","k_sinf.rs","k_tan.rs","k_tanf.rs","ldexp.rs","ldexpf.rs","lgamma.rs","lgamma_r.rs","lgammaf.rs","lgammaf_r.rs","log.rs","log10.rs","log10f.rs","log1p.rs","log1pf.rs","log2.rs","log2f.rs","logf.rs","mod.rs","modf.rs","modff.rs","nextafter.rs","nextafterf.rs","pow.rs","powf.rs","rem_pio2.rs","rem_pio2_large.rs","rem_pio2f.rs","remainder.rs","remainderf.rs","remquo.rs","remquof.rs","round.rs","roundf.rs","scalbn.rs","scalbnf.rs","sin.rs","sincos.rs","sincosf.rs","sinf.rs","sinh.rs","sinhf.rs","sqrt.rs","sqrtf.rs","tan.rs","tanf.rs","tanh.rs","tanhf.rs","tgamma.rs","tgammaf.rs","trunc.rs","truncf.rs"]}],"files":["lib.rs"]};
sourcesIndex["libmimalloc_sys"] = {"name":"","files":["lib.rs"]};
sourcesIndex["lock_api"] = {"name":"","files":["lib.rs","mutex.rs","remutex.rs","rwlock.rs"]};
sourcesIndex["log"] = {"name":"","files":["lib.rs","macros.rs"]};
sourcesIndex["lz4"] = {"name":"","dirs":[{"name":"block","files":["mod.rs"]}],"files":["decoder.rs","encoder.rs","lib.rs","liblz4.rs"]};
sourcesIndex["lz4_sys"] = {"name":"","files":["lib.rs"]};
sourcesIndex["matrixmultiply"] = {"name":"","dirs":[{"name":"x86","files":["macros.rs","mod.rs"]}],"files":["aligned_alloc.rs","archparam.rs","debugmacros.rs","dgemm_kernel.rs","gemm.rs","kernel.rs","lib.rs","loopmacros.rs","sgemm_kernel.rs","util.rs"]};
sourcesIndex["memchr"] = {"name":"","dirs":[{"name":"x86","files":["avx.rs","mod.rs","sse2.rs"]}],"files":["fallback.rs","iter.rs","lib.rs","naive.rs"]};
sourcesIndex["memmap2"] = {"name":"","files":["lib.rs","unix.rs"]};
sourcesIndex["memoffset"] = {"name":"","files":["lib.rs","offset_of.rs","raw_field.rs","span_of.rs"]};
sourcesIndex["mimalloc"] = {"name":"","files":["lib.rs"]};
sourcesIndex["miniz_oxide"] = {"name":"","dirs":[{"name":"deflate","files":["buffer.rs","core.rs","mod.rs","stream.rs"]},{"name":"inflate","files":["core.rs","mod.rs","output_buffer.rs","stream.rs"]}],"files":["lib.rs","shared.rs"]};
sourcesIndex["mio"] = {"name":"","dirs":[{"name":"event","files":["event.rs","events.rs","mod.rs","source.rs"]},{"name":"sys","dirs":[{"name":"unix","dirs":[{"name":"selector","files":["epoll.rs","mod.rs"]}],"files":["mod.rs","pipe.rs","sourcefd.rs","waker.rs"]}],"files":["mod.rs"]}],"files":["interest.rs","io_source.rs","lib.rs","macros.rs","poll.rs","token.rs","waker.rs"]};
sourcesIndex["ndarray"] = {"name":"","dirs":[{"name":"dimension","files":["axes.rs","axis.rs","conversion.rs","dim.rs","dimension_trait.rs","dynindeximpl.rs","macros.rs","mod.rs","ndindex.rs","remove_axis.rs"]},{"name":"extension","files":["nonnull.rs"]},{"name":"impl_views","files":["constructors.rs","conversions.rs","indexing.rs","mod.rs","splitting.rs"]},{"name":"iterators","files":["chunks.rs","iter.rs","lanes.rs","macros.rs","mod.rs","windows.rs"]},{"name":"layout","files":["layoutfmt.rs","mod.rs"]},{"name":"linalg","files":["impl_linalg.rs","mod.rs"]},{"name":"numeric","files":["impl_numeric.rs","mod.rs"]},{"name":"zip","files":["mod.rs","zipmacro.rs"]}],"files":["aliases.rs","argument_traits.rs","arrayformat.rs","arraytraits.rs","data_repr.rs","data_traits.rs","error.rs","extension.rs","free_functions.rs","geomspace.rs","impl_1d.rs","impl_2d.rs","impl_clone.rs","impl_constructors.rs","impl_cow.rs","impl_dyn.rs","impl_methods.rs","impl_ops.rs","impl_owned_array.rs","impl_raw_views.rs","impl_special_element_types.rs","indexes.rs","itertools.rs","lib.rs","linalg_traits.rs","linspace.rs","logspace.rs","macro_utils.rs","numeric_util.rs","prelude.rs","private.rs","shape_builder.rs","slice.rs","stacking.rs"]};
sourcesIndex["num"] = {"name":"","files":["lib.rs"]};
sourcesIndex["num_bigint"] = {"name":"","dirs":[{"name":"bigint","files":["addition.rs","bits.rs","convert.rs","division.rs","multiplication.rs","power.rs","shift.rs","subtraction.rs"]},{"name":"biguint","files":["addition.rs","bits.rs","convert.rs","division.rs","iter.rs","monty.rs","multiplication.rs","power.rs","shift.rs","subtraction.rs"]}],"files":["bigint.rs","biguint.rs","lib.rs","macros.rs"]};
sourcesIndex["num_complex"] = {"name":"","files":["cast.rs","lib.rs","pow.rs"]};
sourcesIndex["num_cpus"] = {"name":"","files":["lib.rs","linux.rs"]};
sourcesIndex["num_integer"] = {"name":"","files":["average.rs","lib.rs","roots.rs"]};
sourcesIndex["num_iter"] = {"name":"","files":["lib.rs"]};
sourcesIndex["num_rational"] = {"name":"","files":["lib.rs","pow.rs"]};
sourcesIndex["num_traits"] = {"name":"","dirs":[{"name":"ops","files":["checked.rs","inv.rs","mod.rs","mul_add.rs","overflowing.rs","saturating.rs","wrapping.rs"]}],"files":["bounds.rs","cast.rs","float.rs","identities.rs","int.rs","lib.rs","macros.rs","pow.rs","real.rs","sign.rs"]};
sourcesIndex["once_cell"] = {"name":"","files":["lib.rs","race.rs"]};
sourcesIndex["ordered_float"] = {"name":"","files":["lib.rs"]};
sourcesIndex["packed_simd_2"] = {"name":"","dirs":[{"name":"api","dirs":[{"name":"cast","files":["macros.rs","v128.rs","v16.rs","v256.rs","v32.rs","v512.rs","v64.rs"]},{"name":"cmp","files":["eq.rs","ord.rs","partial_eq.rs","partial_ord.rs","vertical.rs"]},{"name":"fmt","files":["binary.rs","debug.rs","lower_hex.rs","octal.rs","upper_hex.rs"]},{"name":"from","files":["from_array.rs","from_vector.rs"]},{"name":"math","dirs":[{"name":"float","files":["abs.rs","consts.rs","cos.rs","exp.rs","ln.rs","mul_add.rs","mul_adde.rs","powf.rs","recpre.rs","rsqrte.rs","sin.rs","sqrt.rs","sqrte.rs","tanh.rs"]}],"files":["float.rs"]},{"name":"minimal","files":["iuf.rs","mask.rs","ptr.rs"]},{"name":"ops","files":["scalar_arithmetic.rs","scalar_bitwise.rs","scalar_mask_bitwise.rs","scalar_shifts.rs","vector_arithmetic.rs","vector_bitwise.rs","vector_float_min_max.rs","vector_int_min_max.rs","vector_mask_bitwise.rs","vector_neg.rs","vector_rotates.rs","vector_shifts.rs"]},{"name":"ptr","files":["gather_scatter.rs"]},{"name":"reductions","files":["bitwise.rs","float_arithmetic.rs","integer_arithmetic.rs","mask.rs","min_max.rs"]},{"name":"slice","files":["from_slice.rs","write_to_slice.rs"]}],"files":["bit_manip.rs","bitmask.rs","cast.rs","cmp.rs","default.rs","fmt.rs","from.rs","hash.rs","math.rs","minimal.rs","ops.rs","ptr.rs","reductions.rs","select.rs","shuffle.rs","shuffle1_dyn.rs","slice.rs","swap_bytes.rs"]},{"name":"codegen","dirs":[{"name":"math","dirs":[{"name":"float","files":["abs.rs","cos.rs","cos_pi.rs","exp.rs","ln.rs","macros.rs","mul_add.rs","mul_adde.rs","powf.rs","sin.rs","sin_cos_pi.rs","sin_pi.rs","sqrt.rs","sqrte.rs","tanh.rs"]}],"files":["float.rs"]},{"name":"reductions","dirs":[{"name":"mask","dirs":[{"name":"x86","files":["sse.rs","sse2.rs"]}],"files":["fallback_impl.rs","x86.rs"]}],"files":["mask.rs"]}],"files":["bit_manip.rs","llvm.rs","math.rs","pointer_sized_int.rs","reductions.rs","shuffle.rs","shuffle1_dyn.rs","swap_bytes.rs","v128.rs","v16.rs","v256.rs","v32.rs","v512.rs","v64.rs","vPtr.rs","vSize.rs"]},{"name":"testing","files":["macros.rs"]}],"files":["api.rs","codegen.rs","lib.rs","masks.rs","sealed.rs","testing.rs","v128.rs","v16.rs","v256.rs","v32.rs","v512.rs","v64.rs","vPtr.rs","vSize.rs"]};
sourcesIndex["parking_lot"] = {"name":"","files":["condvar.rs","deadlock.rs","elision.rs","fair_mutex.rs","lib.rs","mutex.rs","once.rs","raw_fair_mutex.rs","raw_mutex.rs","raw_rwlock.rs","remutex.rs","rwlock.rs","util.rs"]};
sourcesIndex["parking_lot_core"] = {"name":"","dirs":[{"name":"thread_parker","files":["linux.rs","mod.rs"]}],"files":["lib.rs","parking_lot.rs","spinwait.rs","util.rs","word_lock.rs"]};
sourcesIndex["parquet"] = {"name":"","dirs":[{"name":"arrow","files":["array_reader.rs","arrow_reader.rs","arrow_writer.rs","converter.rs","levels.rs","mod.rs","record_reader.rs","schema.rs"]},{"name":"column","files":["mod.rs","page.rs","reader.rs","writer.rs"]},{"name":"encodings","files":["decoding.rs","encoding.rs","levels.rs","mod.rs","rle.rs"]},{"name":"file","files":["footer.rs","metadata.rs","mod.rs","properties.rs","reader.rs","serialized_reader.rs","statistics.rs","writer.rs"]},{"name":"record","files":["api.rs","mod.rs","reader.rs","record_writer.rs","triplet.rs"]},{"name":"schema","files":["mod.rs","parser.rs","printer.rs","types.rs","visitor.rs"]},{"name":"util","files":["bit_packing.rs","bit_util.rs","cursor.rs","hash_util.rs","io.rs","memory.rs","mod.rs"]}],"files":["basic.rs","compression.rs","data_type.rs","errors.rs","lib.rs"]};
sourcesIndex["parquet_format"] = {"name":"","files":["lib.rs","parquet_format.rs"]};
sourcesIndex["polars"] = {"name":"","files":["lib.rs","prelude.rs"]};
sourcesIndex["polars_arrow"] = {"name":"","dirs":[{"name":"kernels","files":["mod.rs","set.rs"]}],"files":["array.rs","bit_util.rs","buffer.rs","builder.rs","error.rs","lib.rs","prelude.rs","utils.rs","vec.rs"]};
sourcesIndex["polars_core"] = {"name":"","dirs":[{"name":"chunked_array","dirs":[{"name":"iterator","files":["mod.rs"]},{"name":"kernels","files":["mod.rs","strings.rs","take.rs","take_agg.rs","temporal.rs"]},{"name":"object","files":["builder.rs","mod.rs"]},{"name":"ops","files":["aggregate.rs","apply.rs","chunkops.rs","cum_agg.rs","explode.rs","fill_none.rs","filter.rs","mod.rs","peaks.rs","set.rs","shift.rs","sort.rs","take.rs","take_single.rs","unique.rs","window.rs","zip.rs"]},{"name":"temporal","files":["conversion.rs","conversions_utils.rs","mod.rs"]}],"files":["arithmetic.rs","boolean.rs","builder.rs","cast.rs","comparison.rs","float.rs","mod.rs","ndarray.rs","random.rs","strings.rs","upstream_traits.rs"]},{"name":"doc","dirs":[{"name":"changelog","files":["mod.rs","v0_10_0_11.rs","v0_3.rs","v0_4.rs","v0_5.rs","v0_6.rs","v0_7.rs","v0_8.rs","v0_9.rs"]}],"files":["mod.rs","time.rs"]},{"name":"frame","files":["arithmetic.rs","explode.rs","group_by.rs","hash_join.rs","mod.rs","resample.rs","row.rs","select.rs","upstream_traits.rs"]},{"name":"series","files":["arithmetic.rs","comparison.rs","implementations.rs","iterator.rs","mod.rs"]}],"files":["datatypes.rs","error.rs","fmt.rs","functions.rs","lib.rs","prelude.rs","testing.rs","utils.rs","vector_hasher.rs"]};
sourcesIndex["polars_io"] = {"name":"","dirs":[{"name":"csv_core","files":["buffer.rs","chunked_parser.rs","csv.rs","mod.rs","parser.rs","utils.rs"]}],"files":["csv.rs","ipc.rs","json.rs","lib.rs","parquet.rs","prelude.rs"]};
sourcesIndex["polars_lazy"] = {"name":"","dirs":[{"name":"logical_plan","dirs":[{"name":"optimizer","files":["aggregate_pushdown.rs","aggregate_scan_projections.rs","mod.rs","predicate_pushdown.rs","projection_pushdown.rs","simplify_expr.rs","type_coercion.rs"]}],"files":["iterator.rs","mod.rs"]},{"name":"physical_plan","files":["executors.rs","expressions.rs","mod.rs","planner.rs"]}],"files":["dsl.rs","frame.rs","functions.rs","lib.rs","prelude.rs","utils.rs"]};
sourcesIndex["ppv_lite86"] = {"name":"","dirs":[{"name":"x86_64","files":["mod.rs","sse2.rs"]}],"files":["lib.rs","soft.rs","types.rs"]};
sourcesIndex["prettytable"] = {"name":"","files":["cell.rs","csv.rs","format.rs","lib.rs","row.rs","utils.rs"]};
sourcesIndex["proc_macro2"] = {"name":"","files":["detection.rs","fallback.rs","lib.rs","marker.rs","parse.rs","wrapper.rs"]};
sourcesIndex["quote"] = {"name":"","files":["ext.rs","format.rs","ident_fragment.rs","lib.rs","runtime.rs","spanned.rs","to_tokens.rs"]};
sourcesIndex["rand"] = {"name":"","dirs":[{"name":"distributions","dirs":[{"name":"weighted","files":["alias_method.rs","mod.rs"]}],"files":["bernoulli.rs","binomial.rs","cauchy.rs","dirichlet.rs","exponential.rs","float.rs","gamma.rs","integer.rs","mod.rs","normal.rs","other.rs","pareto.rs","poisson.rs","triangular.rs","uniform.rs","unit_circle.rs","unit_sphere.rs","utils.rs","weibull.rs","ziggurat_tables.rs"]},{"name":"rngs","dirs":[{"name":"adapter","files":["mod.rs","read.rs","reseeding.rs"]}],"files":["entropy.rs","mock.rs","mod.rs","std.rs","thread.rs"]},{"name":"seq","files":["index.rs","mod.rs"]}],"files":["lib.rs","prelude.rs"]};
sourcesIndex["rand_chacha"] = {"name":"","files":["chacha.rs","guts.rs","lib.rs"]};
sourcesIndex["rand_core"] = {"name":"","files":["block.rs","error.rs","impls.rs","le.rs","lib.rs","os.rs"]};
sourcesIndex["rand_distr"] = {"name":"","files":["binomial.rs","cauchy.rs","dirichlet.rs","exponential.rs","gamma.rs","inverse_gaussian.rs","lib.rs","normal.rs","normal_inverse_gaussian.rs","pareto.rs","pert.rs","poisson.rs","triangular.rs","unit_ball.rs","unit_circle.rs","unit_disc.rs","unit_sphere.rs","utils.rs","weibull.rs","weighted_alias.rs","ziggurat_tables.rs"]};
sourcesIndex["rawpointer"] = {"name":"","files":["lib.rs"]};
sourcesIndex["rayon"] = {"name":"","dirs":[{"name":"collections","files":["binary_heap.rs","btree_map.rs","btree_set.rs","hash_map.rs","hash_set.rs","linked_list.rs","mod.rs","vec_deque.rs"]},{"name":"compile_fail","files":["cannot_collect_filtermap_data.rs","cannot_zip_filtered_data.rs","cell_par_iter.rs","mod.rs","must_use.rs","no_send_par_iter.rs","rc_par_iter.rs"]},{"name":"iter","dirs":[{"name":"collect","files":["consumer.rs","mod.rs"]},{"name":"find_first_last","files":["mod.rs"]},{"name":"plumbing","files":["mod.rs"]}],"files":["chain.rs","chunks.rs","cloned.rs","copied.rs","empty.rs","enumerate.rs","extend.rs","filter.rs","filter_map.rs","find.rs","flat_map.rs","flat_map_iter.rs","flatten.rs","flatten_iter.rs","fold.rs","for_each.rs","from_par_iter.rs","inspect.rs","interleave.rs","interleave_shortest.rs","intersperse.rs","len.rs","map.rs","map_with.rs","mod.rs","multizip.rs","noop.rs","once.rs","panic_fuse.rs","par_bridge.rs","positions.rs","product.rs","reduce.rs","repeat.rs","rev.rs","skip.rs","splitter.rs","step_by.rs","sum.rs","take.rs","try_fold.rs","try_reduce.rs","try_reduce_with.rs","unzip.rs","update.rs","while_some.rs","zip.rs","zip_eq.rs"]},{"name":"slice","files":["mergesort.rs","mod.rs","quicksort.rs"]}],"files":["delegate.rs","lib.rs","math.rs","option.rs","par_either.rs","prelude.rs","private.rs","range.rs","range_inclusive.rs","result.rs","split_producer.rs","str.rs","string.rs","vec.rs"]};
sourcesIndex["rayon_core"] = {"name":"","dirs":[{"name":"compile_fail","files":["mod.rs","quicksort_race1.rs","quicksort_race2.rs","quicksort_race3.rs","rc_return.rs","rc_upvar.rs","scope_join_bad.rs"]},{"name":"join","files":["mod.rs"]},{"name":"scope","files":["mod.rs"]},{"name":"sleep","files":["counters.rs","mod.rs"]},{"name":"spawn","files":["mod.rs"]},{"name":"thread_pool","files":["mod.rs"]}],"files":["job.rs","latch.rs","lib.rs","log.rs","private.rs","registry.rs","unwind.rs","util.rs"]};
sourcesIndex["regex"] = {"name":"","dirs":[{"name":"literal","files":["imp.rs","mod.rs"]}],"files":["backtrack.rs","compile.rs","dfa.rs","error.rs","exec.rs","expand.rs","find_byte.rs","freqs.rs","input.rs","lib.rs","pikevm.rs","pool.rs","prog.rs","re_builder.rs","re_bytes.rs","re_set.rs","re_trait.rs","re_unicode.rs","sparse.rs","utf8.rs"]};
sourcesIndex["regex_automata"] = {"name":"","files":["classes.rs","dense.rs","dfa.rs","lib.rs","regex.rs","sparse.rs","state_id.rs"]};
sourcesIndex["regex_syntax"] = {"name":"","dirs":[{"name":"ast","files":["mod.rs","parse.rs","print.rs","visitor.rs"]},{"name":"hir","dirs":[{"name":"literal","files":["mod.rs"]}],"files":["interval.rs","mod.rs","print.rs","translate.rs","visitor.rs"]},{"name":"unicode_tables","files":["age.rs","case_folding_simple.rs","general_category.rs","grapheme_cluster_break.rs","mod.rs","perl_word.rs","property_bool.rs","property_names.rs","property_values.rs","script.rs","script_extension.rs","sentence_break.rs","word_break.rs"]}],"files":["either.rs","error.rs","lib.rs","parser.rs","unicode.rs","utf8.rs"]};
sourcesIndex["ryu"] = {"name":"","dirs":[{"name":"buffer","files":["mod.rs"]},{"name":"pretty","files":["exponent.rs","mantissa.rs","mod.rs"]}],"files":["common.rs","d2s.rs","d2s_full_table.rs","d2s_intrinsics.rs","digit_table.rs","f2s.rs","f2s_intrinsics.rs","lib.rs"]};
sourcesIndex["scopeguard"] = {"name":"","files":["lib.rs"]};
sourcesIndex["serde"] = {"name":"","dirs":[{"name":"de","files":["ignored_any.rs","impls.rs","mod.rs","seed.rs","utf8.rs","value.rs"]},{"name":"private","files":["de.rs","doc.rs","mod.rs","ser.rs","size_hint.rs"]},{"name":"ser","files":["fmt.rs","impls.rs","impossible.rs","mod.rs"]}],"files":["integer128.rs","lib.rs","macros.rs"]};
sourcesIndex["serde_derive"] = {"name":"","dirs":[{"name":"internals","files":["ast.rs","attr.rs","case.rs","check.rs","ctxt.rs","mod.rs","receiver.rs","respan.rs","symbol.rs"]}],"files":["bound.rs","de.rs","dummy.rs","fragment.rs","lib.rs","pretend.rs","ser.rs","try.rs"]};
sourcesIndex["serde_json"] = {"name":"","dirs":[{"name":"features_check","files":["mod.rs"]},{"name":"io","files":["mod.rs"]},{"name":"value","files":["de.rs","from.rs","index.rs","mod.rs","partial_eq.rs","ser.rs"]}],"files":["de.rs","error.rs","iter.rs","lib.rs","macros.rs","map.rs","number.rs","read.rs","ser.rs"]};
sourcesIndex["signal_hook"] = {"name":"","files":["cleanup.rs","flag.rs","iterator.rs","lib.rs","pipe.rs"]};
sourcesIndex["signal_hook_registry"] = {"name":"","files":["half_lock.rs","lib.rs"]};
sourcesIndex["smallvec"] = {"name":"","files":["lib.rs"]};
sourcesIndex["snap"] = {"name":"","files":["bytes.rs","compress.rs","crc32.rs","crc32_table.rs","decompress.rs","error.rs","frame.rs","lib.rs","raw.rs","read.rs","tag.rs","write.rs"]};
sourcesIndex["static_assertions"] = {"name":"","files":["assert_cfg.rs","assert_eq_align.rs","assert_eq_size.rs","assert_fields.rs","assert_impl.rs","assert_obj_safe.rs","assert_trait.rs","assert_type.rs","const_assert.rs","lib.rs"]};
sourcesIndex["strum"] = {"name":"","files":["additional_attributes.rs","lib.rs"]};
sourcesIndex["strum_macros"] = {"name":"","dirs":[{"name":"helpers","files":["case_style.rs","metadata.rs","mod.rs","type_props.rs","variant_props.rs"]},{"name":"macros","dirs":[{"name":"strings","files":["as_ref_str.rs","display.rs","from_string.rs","mod.rs","to_string.rs"]}],"files":["enum_count.rs","enum_discriminants.rs","enum_iter.rs","enum_messages.rs","enum_properties.rs","enum_variant_names.rs","mod.rs"]}],"files":["lib.rs"]};
sourcesIndex["syn"] = {"name":"","dirs":[{"name":"gen","files":["clone.rs","debug.rs","eq.rs","gen_helper.rs","hash.rs","visit.rs"]}],"files":["attr.rs","await.rs","bigint.rs","buffer.rs","custom_keyword.rs","custom_punctuation.rs","data.rs","derive.rs","discouraged.rs","error.rs","export.rs","expr.rs","ext.rs","file.rs","generics.rs","group.rs","ident.rs","item.rs","lib.rs","lifetime.rs","lit.rs","lookahead.rs","mac.rs","macros.rs","op.rs","parse.rs","parse_macro_input.rs","parse_quote.rs","pat.rs","path.rs","print.rs","punctuated.rs","reserved.rs","sealed.rs","span.rs","spanned.rs","stmt.rs","thread.rs","token.rs","tt.rs","ty.rs","verbatim.rs","whitespace.rs"]};
sourcesIndex["term"] = {"name":"","dirs":[{"name":"terminfo","dirs":[{"name":"parser","files":["compiled.rs","names.rs"]}],"files":["mod.rs","parm.rs","searcher.rs"]}],"files":["lib.rs"]};
sourcesIndex["thiserror"] = {"name":"","files":["aserror.rs","display.rs","lib.rs"]};
sourcesIndex["thiserror_impl"] = {"name":"","files":["ast.rs","attr.rs","expand.rs","fmt.rs","lib.rs","prop.rs","valid.rs"]};
sourcesIndex["threadpool"] = {"name":"","files":["lib.rs"]};
sourcesIndex["thrift"] = {"name":"","dirs":[{"name":"protocol","files":["binary.rs","compact.rs","mod.rs","multiplexed.rs","stored.rs"]},{"name":"server","files":["mod.rs","multiplexed.rs","threaded.rs"]},{"name":"transport","files":["buffered.rs","framed.rs","mem.rs","mod.rs","socket.rs"]}],"files":["autogen.rs","errors.rs","lib.rs"]};
sourcesIndex["time"] = {"name":"","files":["display.rs","duration.rs","lib.rs","parse.rs","sys.rs"]};
sourcesIndex["unicode_segmentation"] = {"name":"","files":["grapheme.rs","lib.rs","sentence.rs","tables.rs","word.rs"]};
sourcesIndex["unicode_width"] = {"name":"","files":["lib.rs","tables.rs"]};
sourcesIndex["unicode_xid"] = {"name":"","files":["lib.rs","tables.rs"]};
sourcesIndex["unsafe_unwrap"] = {"name":"","files":["lib.rs"]};
sourcesIndex["zstd"] = {"name":"","dirs":[{"name":"block","files":["compressor.rs","decompressor.rs","mod.rs"]},{"name":"stream","dirs":[{"name":"read","files":["mod.rs"]},{"name":"write","files":["mod.rs"]},{"name":"zio","files":["mod.rs","reader.rs","writer.rs"]}],"files":["functions.rs","mod.rs","raw.rs"]}],"files":["dict.rs","lib.rs"]};
sourcesIndex["zstd_safe"] = {"name":"","files":["lib.rs"]};
sourcesIndex["zstd_sys"] = {"name":"","files":["bindings_experimental.rs","lib.rs"]};
createSourceSidebar();
